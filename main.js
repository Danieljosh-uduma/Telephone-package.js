// Telephone class
class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  // add phone number
  addPhoneNumber(number) {
    this.phoneNumbers.add(number);
  }

  // remove phone number
  removePhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      this.phoneNumbers.delete(number);
    } else {
      console.log(
        `The number ${number} not found. Cannot perform operation! \n`
      );
    }
  }

  // dial phone number and notify observers
  dialPhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      this._notifyObservers(number);
    } else {
      console.log(
        `The number ${number} not found. Cannot perform operation!\nCheck the number and try again... \n `
      );
    }
  }

  // add observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // remove observer
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  _notifyObservers(number) {
    this.observers.forEach((observer) => observer.notify(number));
  }
}

// observer class
class PhoneNumberObserver {
  notify(number) {
    console.log(`${number} is dialed`);
  }
}

// observer class
class DialPhoneNumberObserver {
  notify(number) {
    console.log(`Now Dailing ${number}`);
  }
}

// add a new telephone
const Tel = new Telephone();

// create observer instance
const dialObserver = new DialPhoneNumberObserver();
const phoneObserver = new PhoneNumberObserver();

// add observers
Tel.addObserver(phoneObserver);
Tel.addObserver(dialObserver);

// add phone numbers
Tel.addPhoneNumber(234567890);
Tel.addPhoneNumber(234658709);

// dial phone number
Tel.dialPhoneNumber(234567890);
