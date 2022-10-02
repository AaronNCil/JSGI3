class person1 {
    constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;


    this.exercise = function () {
    console.log("Running is fun! - said no one ever")
    }


    this.fetchJob = function () {
    console.log(`${name} is a ${job}`)
    }
    }
    }


    class programmer1 extends person1 {
    constructor(name, job, age, languages, busy = true) {
    super(name, job, age,)
    this.languages = languages;
    this.busy = busy;
    }


    completeTask() {
    this.busy = false;
    }


    acceptNewtask() {
    this.busy = true;
    }


    offerNewtask() {
    if (this.busy === true) {
    console.log(`${this.name} Is busy right now and cannot take anymore tasks`)
    } else {
    console.log(`${this.name} Is free to take more tasks`)
    }
    }


    learnLanguage() {
    for (let i = 0; i < arguments.length; i++) {
    this.languages.push(arguments[i]);
    }
    }


    listLanguages() {
    console.log(`${this.name} knows the following languages: ${this.languages.join(", ")}`)
    }

    }


    const techProgrammer1 = new programmer1('Brad', 'Developer', 31, ['Html', 'Css', 'Javascript', 'Vietnamese', 'English']);
    const techProgrammer2 = new programmer1('Mason', 'Doctor', 6, ['React', 'Javascript', 'Python', 'React'], false);
    techProgrammer1.offerNewtask(); // Brad is busy
    techProgrammer2.offerNewtask(); // Mason is busy
    techProgrammer1.learnLanguage("Japanese", "Vietnamese",);
    techProgrammer1.listLanguages(); // list the languages for chet
    techProgrammer2.listLanguages(); // list the languages for Max