export class Profile {
    constructor(public first: string, public last: string) {}
  
    lastChanged() {
      return new Date();
    }
  }