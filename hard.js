function data() {
    let pii = { 
        name: 'Bob Ross', 
        ssn: 555-55-555 
    }
    
    return { 
        getName: function () {
    return `Hi my name is ${pii.name}`
     }
    }        
    }    
    let x = data();
    console.log(x.getName());