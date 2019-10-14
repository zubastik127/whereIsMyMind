let question = confirm('You is Maria?');

if (question == false) {
    alert('Error');
}else{
let login = prompt('Login:',' ');

if (login == 'zubastik'){
    let password = prompt('Password',' ');

    if (password == 127){
        alert('Wellcome!')
    }else{
        alert('Error');
    }
}else{
alert('You are not Maria');
}
}