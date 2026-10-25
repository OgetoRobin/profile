/* session.js - shows "Hi, name / Log out" in the navbar on every page */

function showUser() {
    let user = null;
    try { user = JSON.parse(sessionStorage.getItem('u')); } catch (e) {}

    document.body.classList.toggle('in', Boolean(user));
    if (user) $('#uname').textContent = user.name;
}

$('#out').onclick = () => {
    try { sessionStorage.removeItem('u'); } catch (e) {}
    showUser();
    location.href = 'index.html';
};

showUser();
