function greeting(){
    alert('Hello I am your pet rock!');
}

function nameCheck(){
    var person = prompt('What is your name?', 'Enter your name here!');
    if(person){
        document.getElementById('kep_smile').src = 'rock_smile.png';
        alert('It is good to meet you, ' + person + '!');
    }
}