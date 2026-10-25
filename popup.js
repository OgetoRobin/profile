/* popup.js - Login and Register: loading spinner and success / error popups */

const modal = $('#modal');
let afterClose = null;

function popup(type, title, text, then) {
    afterClose = then || null;
    $('#mi').className = 'mi ' + type;     /* "ok" or "err": CSS picks the icon */
    $('#mt').textContent = title;
    $('#mx').textContent = text;
    modal.classList.add('on');
    $('#mb').focus();
}

function closePopup() {
    modal.classList.remove('on');
    const next = afterClose;
    afterClose = null;
    if (next) next();
}

$('#mb').onclick = closePopup;
modal.onclick = e => { if (e.target === modal) closePopup(); };
addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('on')) closePopup();
});

function showLoading(text, ms) {
    return new Promise(done => {
        $('#lt').textContent = text;
        $('#load').classList.add('on');
        setTimeout(() => {
            $('#load').classList.remove('on');
            done();
        }, ms);
    });
}

const oops = text => popup('err', 'Oops, hold up 🙈', text);
