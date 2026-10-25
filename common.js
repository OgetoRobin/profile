/* common.js - small helpers used on every page (needs to load first) */

const $ = s => document.querySelector(s);

function load(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
}

function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
}

async function sha256(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}
