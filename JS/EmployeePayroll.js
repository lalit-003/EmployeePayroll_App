class EmployeePayRollData {
    
    //getter and setter methods :
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get profilePic()
    {
        return this._profilePic;
    }
    set profilePic(profilePic)
    {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
      this._gender = gender;
    }
    
    get department()
    {
        return this._department;
    }

    set department(department)
    {
        this._department=department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
         this._salary = salary;
    }

    get note()
    {
       return this._note;
    }
    set note(note)
    {
       this._note = note;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate;
        else throw "Invalid Date , Can't enter a future date";
    }

    //method 
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefinedDate" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id =" + this.id + ",name = " + this.name + ",salary = " + this.salary +
            " ,gender = " + this.gender + " ,profilePic = " + this.profilePic +
            " ,department = " + this.department +" ,startDate = " + empDate+" ,notes = " + this.note;
    }
}

