const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const PLUGIN_DIR = 'C:/Obsidian/个人文件库/.obsidian/plugins/obsidian-translator';

async function build() {
    try {
        console.log('Building main.js...');
        await esbuild.build({
            entryPoints: ['main.ts'],
            bundle: true,
            platform: 'node',
            outfile: '下载/main.js',
            external: ['obsidian'],
            format: 'cjs',
            minify: false,
        });
        console.log('Built main.js successfully');

        if (fs.existsSync(PLUGIN_DIR)) {
            console.log('Copying files to Obsidian plugin directory...');
            fs.copyFileSync('下载/main.js', path.join(PLUGIN_DIR, 'main.js'));
            fs.copyFileSync('manifest.json', path.join(PLUGIN_DIR, 'manifest.json'));
            fs.copyFileSync('styles.css', path.join(PLUGIN_DIR, 'styles.css'));
            fs.copyFileSync('proxy.js', path.join(PLUGIN_DIR, 'proxy.js'));
            console.log('Files copied successfully');
        } else {
            console.log('Obsidian plugin directory not found, skipping copy');
        }

        console.log('Build complete!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build();