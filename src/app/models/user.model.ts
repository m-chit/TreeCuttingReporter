export class UserModel {
  email: string;
  isAdmin: boolean;
  lastName: string;
  name: string;
  token: string;
  username: string;

  constructor(userData: {email: string, isAdmin: boolean, lastName: string, name: string, token: string, username: string}) {
    this.email = userData.email;
    this.isAdmin = userData.isAdmin;
    this.lastName = userData.lastName;
    this.name = userData.name;
    this.token = userData.token;
    this.username = userData.username;
  }
}
