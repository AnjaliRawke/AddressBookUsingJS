class Contact{
    validateFirstName = RegExp('^[A-Z]{1}[a-z]{3,}$');
    validateLastName = RegExp('^[A-Z]{1}[a-z]{3,}$');
    validateAddress = RegExp('^[A-Z][a-z]{4,}$');
    validateCity = RegExp('^[A-Z][a-z]{3,}$');
    validateState = RegExp('^[A-Z][a-z]{4,}$');
    validateZip = RegExp('^[0-9]{6}$');
    validatePhonenumber = RegExp('^[0-9]{2}[0-9]{10}$');
    validateEmail = RegExp('^[0-9a-zA-Z]+([+.-]([a-z0-9A-Z]+))*[@][a-zA-Z0-9]+[.][a-z]{2,4}[,]?([.][a-z]{2,4})?$');

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
      this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    get firstName(){
      return this._firstName;
    }

    set firstName(firstName){
      if(this.validateFirstName.test(firstName))
        {
          this._firstName=firstName;
        }else{
          throw "Enter valid First Name ";
        }
    }


    get lastName(){
      return this._lastName;
    }

    set lastName(lastName){
        if(this.validateLastName.test(lastName))
        {
          this._lastName=lastName;
        }else{
          throw "Enter valid last Name ";
        }
    }

    get address(){
      return this._address;
    }

    set address(address){
        if(this.validateAddress.test(address))
        {
          this._address=address;
        }else{
          throw "Enter valid Address";
        }
    }

    get city(){
      return this._city;
    }

    set city(city){
        if(this.validateCity.test(city))
        {
          this._city=city;
        }else{
          throw "check your city and Enter valid city ";
        }
    }

    get state(){
      return this._state;
    }

    set state(state){
        if(this.validateState.test(state))
        {
          this._state=state;
        }else{
          throw "Enter valid State";
        }
    }

    get zip(){
      return this._zip;
    }

    set zip(zip){
        if(this.validateZip.test(zip))
        {
          this._zip=zip;
        }else{
          throw "Enter valid Code";
        }
    }

    get phoneNumber(){
      return this._phoneNumber;
    }

    set phoneNumber(phoneNumber){
        if(this.validatePhonenumber.test(phoneNumber))
        {
          this._phoneNumber=phoneNumber;
        }else{
          throw "Enter valid Phone Number";
        }
    }

    get email(){
      return this._email;
    }

    set email(email){
        if(this.validateEmail.test(email))
        {
          this._email=email;
        }else{
          throw "Enter valid Email ";
        }
    }
    toString(){
      return (`First Name: ${this.firstName} \nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity : ${this.city}\nState : ${this.state}\nZip code : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}`)
    }
}

let addressBookArray=[];
let Contact1 = new Contact('Anjali', 'Rawke', 'Bhagwantnagar', 'Nanded', 'Maharashtra', '431605', '917058162286', 'anjalirawke@gmail.com');
addressBookArray.push(Contact1);
let Contact2 = new Contact('Apeksha', 'Patil', 'Anandnagar', 'Nanded', 'Maharashtra', '431605', '919011100740', 'apekshapatil@gmail.com');
addressBookArray.push(Contact2);


console.log(Contact1.toString());
console.log("");
console.log(Contact2.toString());

function contactExists(firstName, lastName) {
    return addressBookArray.some(contact => contact.firstName == firstName && contact.lastName == lastName);
}

function editContact(firstName, lastName, details, newValue) {
    if (contactExists(firstName, lastName)) {
        switch (details) {
            case "address":
                addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid details");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
    console.log(addressBookArray.toString());
}

console.log("\nAfter Editing Contact")
editContact("Anjali","Rawke","address","Vadepuri");

function deleteContact(firstName, lastName){
    if(contactExists(firstName, lastName)){
        addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
    }else{
        console.log("Contact Does Not Exist");
    }
    console.log(addressBookArray.toString());
}

console.log("\nAfter Deleting Contact");
deleteContact("Apeksha","Patil")

function CountOfContacts(count) {
    count += 1;
    return count;
}

console.log("\No of Contacts : " + addressBookArray.reduce(CountOfContacts, 0));

function addContact(contact) {
  if (!contactExists(contact.firstName, contact.lastName))
      addressBookArray.push(contact);
  else
      throw "Contact is Present in the Address Book";

}

console.log("\nAdding Duplicate Contact");
try {
    addContact(Contact2);
    addContact(Contact1);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray.toString());

function searchContactByCity(city) {
  return addressBookArray.filter((contact) => contact.city == city);
}

function searchContactByState(state) {
  return addressBookArray.filter((contact) => contact.state == state);
}

console.log("\nSearch Contact By City");
console.log(searchContactByCity("Nanded").toString());

console.log("\nSearch Contact By State");
console.log(searchContactByState("Maharashtra").toString());

function getCountOfContactsByCity(city){
  return addressBookArray.filter((contact) => contact.city == city).length;
}

function getCountOfContactsByState(state){
  return addressBookArray.filter((contact) => contact.state == state).length;
}

console.log("\nNumber of Contacts residing in City : Nanded = " + getCountOfContactsByCity("Nanded"));
console.log("\nNumber of Contacts residing in State : Maharashtra = " + getCountOfContactsByState("Maharashtra"));

function sortAddressBookByName(){
  addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.firstName).localeCompare(secondPerson.firstName));
  console.log(addressBookArray.toString());
}

console.log("\nContacts In Alphabetical Order");
sortAddressBookByName();

function sortAddressBookByCity(){
  addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.city).localeCompare(secondPerson.city));
  console.log(addressBookArray.toString());
}

function sortAddressBookByState(){
  addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.state).localeCompare(secondPerson.state));
  console.log(addressBookArray.toString());
}

function sortAddressBookByZip(){
  addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.zip).localeCompare(secondPerson.zip));
  console.log(addressBookArray.toString());
}

console.log("\nContacts Sorted Using City");
sortAddressBookByCity();

console.log("\nContacts Sorted Using State");
sortAddressBookByState();

console.log("\nContacts Sorted Using Zip");
sortAddressBookByZip();