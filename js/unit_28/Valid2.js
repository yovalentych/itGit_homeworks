class Valid2 extends Valid {
  constructor(email, password) {
    super(email, password);
    this.error_message = '';
  }

  validate() {
    this.error_message = '';
    super.validate();

    if (!this.isValid) {
      return (this.error_message = 'password error');
    } else {
      if (this.email === '') {
        this.isValid = false;
        return (this.error_message = 'email error');
      }
    }
    return this.isValid;
  }
}
