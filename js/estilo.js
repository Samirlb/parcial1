const form = document.getElementById('form');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let users = Array(
        {
        users: user.value,
        password: pass.value
        }
    );
    localStorage.setItem('user',JSON.stringify(users))
    
});

