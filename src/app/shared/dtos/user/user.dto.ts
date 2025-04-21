export class UserDTO {
  id: number;
  name: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
