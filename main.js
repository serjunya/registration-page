$(function() {
    let correct = false;
    const pass = $('#password');
    const name = $('#name');
    const login = $('#login');
    const error = $('#error');
    $('#password, #confirm').keyup(function() {
        let confirm = $('#confirm');
        if (pass.val() !== confirm.val()) {
            confirm.css('border', 'red 1px solid');
            error.css('display', 'block');
            correct = false;
        }
        else {
            confirm.css('border', 'none');
            confirm.css('border-bottom', '1px solid black');
            error.hide();
            correct = true;
        }
    })
    $('button').click(function() {
        if (name !== null && login !== null
            && pass !== null && correct) {
            let user = {
                'name': name.val(),
                'login': login.val(),
                'password': pass.val()
            }
            let json = JSON.stringify(user);
            console.log(json);
        }
    })
})
