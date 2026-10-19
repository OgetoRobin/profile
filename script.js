/* ==========================================================
   IT Student Portfolio - script.js
   Sections: data > pages > routing > photo > contact > auth
   ========================================================== */

const $ = s => document.querySelector(s);


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

const I = p => `<svg viewBox="0 0 24 24">${p}</svg>`;
const pages = ['home', 'career', 'languages', 'projects', 'impact'];
const TI = {
    home: '<path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>',
    career: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18"/>',
    languages: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14"/>',
    projects: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    impact: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'
};
const names = {
    home: 'Home',
    career: 'Career',
    languages: 'Languages',
    projects: 'Projects',
    impact: 'IT &amp; World'
};
const cards = (a) => a.map(x => `<div class="card"><div class="logo">${I(x[0])}</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('');
$('#strengths').innerHTML = cards([
    ['<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>', 'Quick learner', 'I pick up new tools and languages fast.'],
    ['<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>', 'Problem solver', 'I break big problems into small, testable steps.'],
    ['<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-4 3-6 7-6M16 11a3 3 0 100-6M22 20c0-3-2-5-5-5"/>', 'Team player', 'Clear communication and collaboration.']
]);
$('#study').innerHTML = cards([
    ['<path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>', 'Programming', 'Designing, coding and testing software.'],
    ['<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/>', 'Databases', 'Storing and querying data with SQL.'],
    ['<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5L6 17M12 11.5l6 5.5"/>', 'Networking', 'How devices communicate across the internet.'],
    ['<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>', 'Cybersecurity', 'Protecting systems and data from threats.'],
    ['<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>', 'Web development', 'Responsive, accessible websites and apps.'],
    ['<path d="M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.5 1.5A4 4 0 006.5 19z"/>', 'Cloud &amp; systems', 'Operating systems, servers and cloud.']
]);
$('#paths').innerHTML = cards([
    ['<path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>', 'Software / Web Developer', 'Building apps people use every day.'],
    ['<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>', 'Cybersecurity Analyst', 'Defending organisations from digital threats.'],
    ['<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>', 'Data / AI Specialist', 'Turning data into insight with Python.'],
    ['<rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/>', 'Systems / Network Admin', 'Keeping servers and networks reliable.']
]);
const L = [
    [
        "HTML",
        "#e34f26",
        "<path d=\"M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14\"/>",
        "The skeleton of every web page.",
        "You mark up content with tags like &lt;h1&gt; and &lt;img&gt;. The browser reads them and builds the page structure.",
        ['Structure', 'Forms', 'Semantics'],
        90
    ],
    [
        "CSS",
        "#2965f1",
        "<path d=\"M9 4C6 4 7 8 5 12c2 4 1 8 4 8M15 4c3 0 2 4 4 8-2 4-1 8-4 8\"/>",
        "The style and design layer.",
        "Rules select HTML elements and set colours, fonts and layout so pages look good on any screen.",
        ['Flexbox', 'Grid', 'Responsive'],
        85
    ],
    [
        "Java",
        "#d1731b",
        "<path d=\"M5 11h12v4a5 5 0 01-5 5H10a5 5 0 01-5-5v-4zM17 12h1.5a2.5 2.5 0 010 5H17M9 3c-1.5 2 1.5 3 0 5M13 3c-1.5 2 1.5 3 0 5\"/>",
        "Robust, object-oriented programming.",
        "Code is compiled to bytecode that the Java Virtual Machine runs on any device: \"write once, run anywhere\".",
        ['OOP', 'Android', 'Enterprise'],
        75
    ],
    [
        "Python",
        "linear-gradient(135deg,#3776ab,#d4a912)",
        "<path d=\"M12 3c-4 0-5 1.5-5 3v3h6v1H6c-2 0-3 2-3 4s1 4 3 4h2v-3c0-2 1-3 3-3h4c1.5 0 2.5-1 2.5-2.5V6c0-1.5-2-3-5.5-3z\"/>",
        "Simple, readable and versatile.",
        "An interpreter reads your code line by line and runs it straight away, so it is quick to write and test.",
        ['Automation', 'Data / AI', 'Scripting'],
        85
    ],
    [
        "PHP",
        "#777bb4",
        "",
        "Server-side language for dynamic sites.",
        "The server runs PHP, talks to the database and sends finished HTML to the browser.",
        ['Backend', 'MySQL', 'Login systems'],
        70
    ],
    [
        "SQL &amp; more",
        "#0f172a",
        "<ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"3\"/><path d=\"M5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3 3 7 3s7-1.3 7-3\"/>",
        "Databases, plus tools I am exploring.",
        "SQL sends queries to a database to create, read, update and delete data. I am also learning JavaScript and Git.",
        ['MySQL', 'JavaScript', 'Git'],
        60
    ]
];
$('#langs').innerHTML = L.map(x => `<div class="card"><div class="logo" style="background:${x[1]}">${x[2] ? I(x[2]) : '&lt;?php'}</div><h3>${x[0]}</h3><p>${x[3]}</p><div class="how"><b>How it works:</b> ${x[4]}</div><div class="chips">${x[5].map(c => `<span>${c}</span>`).join('')}</div><div class="bar"><i style="width:${x[6]}%"></i></div></div>`).join('');
const P = [
    [
        "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
        "Personal Portfolio Website",
        "This site: a responsive multi-page website.",
        ['HTML', 'CSS', 'JavaScript']
    ],
    [
        "<path d=\"M4 5h6a3 3 0 013 3v12a2 2 0 00-2-2H4zM20 5h-6a3 3 0 00-3 3\"/>",
        "Library Management System",
        "Add, borrow and return books with a simple desktop app.",
        ['Java', 'OOP', 'SQL']
    ],
    [
        "<path d=\"M4 20V10M10 20V4M16 20v-8M22 20H2\"/>",
        "Grade Calculator &amp; Analyzer",
        "Calculates averages and plots student results.",
        ['Python', 'Automation']
    ],
    [
        "<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V8a4 4 0 018 0v3\"/>",
        "Student Login System",
        "Registration, login and sessions backed by a database.",
        ['PHP', 'MySQL', 'Security']
    ]
];
$('#projs').innerHTML = P.map(x => `<div class="card"><div class="logo">${I(x[0])}</div><h3>${x[1]}</h3><p>${x[2]}</p><div class="chips">${x[3].map(c => `<span>${c}</span>`).join('')}</div><div class="row"><a class="btn s" href="#/projects">Live demo</a><a class="btn s" href="#/projects">Source code</a></div></div>`).join('');
$('#imp').innerHTML = [
    ['COMMUNICATION', 'A connected planet', 'Email, messaging and video calls connect people instantly worldwide.'],
    ['EDUCATION', 'Learning for everyone', 'Online courses and digital libraries make knowledge available anywhere.'],
    ['BUSINESS', 'The digital economy', 'E-commerce, online banking and mobile payments opened global markets to everyone.'],
    ['HEALTHCARE', 'Smarter medicine', 'Electronic records, telemedicine and AI help doctors treat patients faster.'],
    ['AUTOMATION &amp; AI', 'Machines that learn', 'Automation and AI take over repetitive work and open new frontiers in science.'],
    ['SECURITY', 'New challenges', 'More data online makes protecting privacy and systems a vital IT career.']
].map(x => `<div><small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('');
/* storage helpers */
const gs = (k) => {
    try {
        return JSON.parse(localStorage.getItem(k));
    }
    catch (e) {
        return null;
    }
};
const ss = (k, v) => {
    try {
        localStorage.setItem(k, JSON.stringify(v));
        return true;
    }
    catch (e) {
        return false;
    }
};
const sess = () => {
    try {
        return JSON.parse(sessionStorage.getItem('u'));
    }
    catch (e) {
        return null;
    }
};
/* routing + nav */
function nav() {
    const r = (location.hash.replace('#/', '') || 'home');
    const id = [...pages, 'login', 'register'].includes(r) ? r : 'home';
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('on', p.id === id));
    $('#tabs').innerHTML = pages.map(p => `<a href="#/${p}" class="${p === id ? 'on' : ''}">${I(TI[p])}${names[p]}</a>`).join('');
    $('#links').innerHTML = pages.map(p => `<a href="#/${p}" class="${p === id ? 'on' : ''}">${names[p]}</a>`).join('');
    const u = sess();
    $('#auth').innerHTML = u ? `<span>Hi, ${u.name.replace(/[<>&]/g, '')}</span><button class="btn s" id="out">Log out</button>` : `<a class="btn s" href="#/login">Log in</a><a class="btn s p" href="#/register">Register</a>`;
    const o = $('#out');
    if (o)
        o.onclick = () => {
            try {
                sessionStorage.removeItem('u');
            }
            catch (e) {
            }
            location.hash = '#/home';
            nav();
        };
    window.scrollTo(0, 0);
}
addEventListener('hashchange', nav);
nav();
/* contact block on every page */
const CI = [
    ['mailto:ogeto783@gmail.com', 'Email', '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>'],
    ['tel:+254703754836', 'Call', '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>'],
    ['#/home', 'LinkedIn', '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z"/>'],
    ['#/home', 'GitHub', '<path d="M9 19c-4 1-4-2-6-2m12 4v-3a3 3 0 00-1-2c3 0 6-2 6-6a5 5 0 00-1-3 5 5 0 000-3s-1 0-3 1a10 10 0 00-6 0C6 3 5 3 5 3a5 5 0 000 3 5 5 0 00-1 3c0 4 3 6 6 6a3 3 0 00-1 2v3"/>'],
    ['#/home', 'Instagram', '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 11-7.9 1.2 4 4 0 017.9-1.2zM17.5 6.5h.01"/>']
];
const CT = `<div class="contact"><h3>Let's connect ✨</h3><p>Got an internship, a project idea, or just wanna talk code? My inbox is always open. Slide in anytime.</p><div class="ci">${CI.map(c => `<a href="${c[0]}" aria-label="${c[1]}">${I(c[2])}${c[1]}</a>`).join('')}</div></div>`;
document.querySelectorAll('.page').forEach(p => p.insertAdjacentHTML('beforeend', CT));
/* popup + loading */
const md = $('#modal');
let after = null;
function popup(t, title, msg, cb) {
    after = cb || null;
    $('#mi').className = 'mi ' + t;
    $('#mi').innerHTML = t === 'ok' ? '<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    $('#mt').textContent = title;
    $('#mx').textContent = msg;
    md.classList.add('on');
    $('#mb').focus();
}
function closePop() {
    md.classList.remove('on');
    const f = after;
    after = null;
    if (f)
        f();
}
$('#mb').onclick = closePop;
md.onclick = e => {
    if (e.target === md)
        closePop();
};
addEventListener('keydown', e => {
    if (e.key === 'Escape' && md.classList.contains('on'))
        closePop();
});
const wait = (t, ms) => new Promise(r => {
    $('#lt').textContent = t;
    $('#load').classList.add('on');
    setTimeout(() => {
        $('#load').classList.remove('on');
        r();
    }, ms);
});
const bad = m => popup('err', 'Oops, hold up 🙈', m);
/* auth (demo, browser-only) */
async function hash(t) {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
}
const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
$('#rf').onsubmit = async (e) => {
    e.preventDefault();
    const n = $('#rn').value.trim(), m = $('#re').value.trim().toLowerCase(), p = $('#rp').value, c = $('#rc').value;
    if (!n)
        return bad("Drop your name first so we know what to call you.");
    if (!ok.test(m))
        return bad("That email doesn't look right. Mind checking it?");
    if (p.length < 8)
        return bad("Your password needs at least 8 characters to stay secure.");
    if (p !== c)
        return bad("Your passwords don't match. Try typing them again.");
    const us = gs('users') || {};
    if (us[m])
        return bad("That email is already registered. Try logging in instead!");
    const h = await hash(p);
    await wait('Creating your account', 1600);
    us[m] = {
        name: n,
        h
    };
    if (!ss('users', us))
        return bad("Your browser blocked saving the account. Check your privacy settings and try again.");
    popup('ok', "You're in! 🎉", "Account created successfully. Now let's log you in.", () => {
        $('#rf').reset();
        location.hash = '#/login';
    });
};
$('#lf').onsubmit = async (e) => {
    e.preventDefault();
    const m = $('#le').value.trim().toLowerCase(), p = $('#lp').value, us = gs('users') || {};
    if (!ok.test(m) || !p)
        return bad("Enter your email and password to continue.");
    const h = await hash(p);
    await wait('Logging you in', 1400);
    if (!us[m] || us[m].h !== h)
        return popup('err', 'Login failed 😬', "Incorrect email or password. Double-check and try again.");
    try {
        sessionStorage.setItem('u', JSON.stringify({
            name: us[m].name,
            email: m
        }));
    }
    catch (x) {
    }
    popup('ok', 'Welcome back! 🙌', 'Great to see you, ' + us[m].name + '.', () => {
        $('#lf').reset();
        location.hash = '#/home';
        nav();
    });
};
