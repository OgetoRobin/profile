/* notice.js - the "site under development" popup (needs common.js first) */

/* ---------- Under-development notice ----------
   Opens as soon as the site loads, once per visit (per browser tab).
   To show it on every page load, delete the two sessionStorage lines. */

const notice = $('#notice');

function closeNotice() {
    notice.classList.remove('on');
    document.body.classList.remove('noscroll');
    try { sessionStorage.setItem('noticeSeen', '1'); } catch (e) {}
}

$('#nok').onclick = closeNotice;
$('#nclose').onclick = closeNotice;
notice.onclick = e => { if (e.target === notice) closeNotice(); };
addEventListener('keydown', e => {
    if (e.key === 'Escape' && notice.classList.contains('on')) closeNotice();
});

let noticeSeen = false;
try { noticeSeen = sessionStorage.getItem('noticeSeen') === '1'; } catch (e) {}
if (!noticeSeen) {
    notice.classList.add('on');
    document.body.classList.add('noscroll');
    $('#nok').focus();
}
