export class UserModel {
  email: string;
  isAdmin: boolean;
  lastName: string;
  name: string;
  token: string;
  username: string;
  role?: string;
  password?: string;
  active?: boolean;
  id?: number;
  reportsAllowed: boolean;

  constructor(userData: {
                email: string,
                isAdmin: boolean,
                lastName: string,
                name: string,
                token: string,
                username: string,
                role?: string,
                password?: string,
                active?: boolean,
                id?: number,
                reportsAllowed: boolean
  }) {
    this.email = userData.email;
    this.isAdmin = userData.isAdmin;
    this.lastName = userData.lastName;
    this.name = userData.name;
    this.token = userData.token;
    this.username = userData.username;
    this.role = userData.role;
    this.password = userData.password;
    this.active = userData.active;
    this.id = userData.id;
    this.reportsAllowed = userData.reportsAllowed;
  }
}
