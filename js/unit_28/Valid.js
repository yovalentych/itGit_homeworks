class Valid {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.isValid = false;
  }

  validate() {
    return (this.isValid = this.password.length > 6);
  }
}
