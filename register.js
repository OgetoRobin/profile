/* register.js - Register page: create an account */

$('#rf').onsubmit = async e => {
    e.preventDefault();

    const name = $('#rn').value.trim();
    const email = $('#re').value.trim().toLowerCase();
    const pass = $('#rp').value;

    if (!name) return oops('Drop your name first so we know what to call you.');
    if (pass !== $('#rc').value) return oops("Your passwords don't match. Try typing them again.");

    const users = load('users') || {};
    if (users[email]) return oops('That email is already registered. Try logging in instead!');

    const hash = await sha256(pass);
    await showLoading('Creating your account', 1600);

    users[email] = { name, hash };
    if (!save('users', users)) return oops('Your browser blocked saving the account. Check your privacy settings and try again.');

    popup('ok', "You're in! 🎉", "Account created successfully. Now let's log you in.", () => {
        $('#rf').reset();
        location.href = 'login.html';
    });
};
