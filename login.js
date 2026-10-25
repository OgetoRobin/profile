/* login.js - Login page: sign in */

$('#lf').onsubmit = async e => {
    e.preventDefault();

    const email = $('#le').value.trim().toLowerCase();
    const users = load('users') || {};

    const hash = await sha256($('#lp').value);
    await showLoading('Logging you in', 1400);

    const user = users[email];
    if (!user || user.hash !== hash) {
        return popup('err', 'Login failed 😬', 'Incorrect email or password. Double-check and try again.');
    }

    try { sessionStorage.setItem('u', JSON.stringify({ name: user.name, email })); } catch (err) {}

    popup('ok', 'Welcome back! 🙌', 'Great to see you, ' + user.name + '.', () => {
        $('#lf').reset();
        location.href = 'index.html';
    });
};
