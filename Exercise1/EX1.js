function exe1(){ 
    let password1 = document.getElementById('input1').value;
    let password2 = document.getElementById('input2').value;
    if(password1.length < 8){
        alert('The passwords are not at least 8 characters long');
    }
    else if(password1 != password2){
        alert('The passwords entered do not match');
    }
    else{
        alert('Same Password')
    }
}
