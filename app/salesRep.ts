import { User } from './user';

export class SalesRep implements User {

  constructor(
    public forenames: string, 
    public surname: string, 
    public nickname: string, 
    public emailAddress: string, 
    public role: string, 
    public dateCreated: Date, 
    public dateRemoved: Date, 
    public locked: boolean, 
    public failedLoginAttempts: number, 
    public customers: string[] ) {
   }

  firstName(): string {
   if (this.forenames.indexOf(' ') > 0) {
      const firstName: string = this.forenames.substring(0, this.forenames.indexOf(' '));
      return firstName;
    } else {
      return this.forenames;
    }
  }

  fullName(): string {
    const firstName = this.firstName();
    return `${firstName} ${this.surname}`;
   }
}