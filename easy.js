function exercise(x){
    function action(){
        return `Today's exercise: ${x}`
    }

    return action;
}

let run = exercise("running");
console.log(run());

let swim = exercise("swimming");
console.log(swim());

