const fs = require('fs');

const html = fs.readFileSync('Lingxi.html', 'utf-8');

// Match everything inside <script>...</script> except those with src attribute
const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
let match;
let scriptIndex = 0;

while ((match = scriptRegex.exec(html)) !== null) {
    const attrs = match[1];
    if (attrs.includes('src=')) continue;
    
    const code = match[2];
    
    // Write code to a temp file
    const tempFile = `temp_script_${scriptIndex}.js`;
    fs.writeFileSync(tempFile, code);
    
    console.log(`Checking script ${scriptIndex}...`);
    try {
        const { execSync } = require('child_process');
        execSync(`node --check ${tempFile}`);
        console.log(`Script ${scriptIndex} is syntactically valid.`);
        fs.unlinkSync(tempFile);
    } catch (err) {
        console.error(`Syntax error in script ${scriptIndex}:`);
        console.error(err.stderr ? err.stderr.toString() : err.message);
        // Find line number in original file
        const linesBefore = html.substring(0, match.index).split('\n').length;
        console.log(`Script starts around line ${linesBefore} of Lingxi.html`);
        // Do not delete tempFile to inspect it
    }
    scriptIndex++;
}
