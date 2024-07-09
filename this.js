const student = {
    firstName: "Reagan",
    hobby: "Football",
    about: function() {console.log(`${this.firstName} is playing ${this.hobby}`)},
}
student.about();