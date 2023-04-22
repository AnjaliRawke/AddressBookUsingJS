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



let myContact = new Contact('Anjali', 'Rawke', 'Bhagwantnagar', 'Nanded', 'Maharashtra', '431605', '917058162286', 'anjalirawke@gmail.com');
console.log(myContact.toString());