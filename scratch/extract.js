const fs = require('fs');

const htmlPath = 'f:/HTML-CSS-JS/Makin_money/.src/.main/tarot-example.html';
const cssPath = 'f:/HTML-CSS-JS/Makin_money/.src/.main/.support/tarot-example.css';
const jsPath = 'f:/HTML-CSS-JS/Makin_money/.src/.main/.support/tarot-example.js';

let html = fs.readFileSync(htmlPath, 'utf8');

let cssContent = '';
html = html.replace(/<style>([\s\S]*?)<\/style>/i, (match, p1) => {
    cssContent = p1;
    return '<link rel="stylesheet" href=".support/tarot-example.css">';
});

let jsContent = [];
let firstScriptReplaced = false;

html = html.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (match, p1) => {
    if (match.toLowerCase().includes(' src=')) {
        return match;
    }
    jsContent.push(p1);
    
    if (!firstScriptReplaced) {
        firstScriptReplaced = true;
        return '<script src=".support/tarot-example.js"></script>';
    }
    return '';
});

// Create .support dir if it doesn't exist
const supportPath = 'f:/HTML-CSS-JS/Makin_money/.src/.main/.support';
if (!fs.existsSync(supportPath)) {
    fs.mkdirSync(supportPath, { recursive: true });
}

fs.writeFileSync(cssPath, cssContent.trim(), 'utf8');
fs.writeFileSync(jsPath, jsContent.join('\n\n').trim(), 'utf8');
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('Extraction complete.');
