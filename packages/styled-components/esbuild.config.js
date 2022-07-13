require('esbuild').buildSync({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    outdir: 'dist',
    external: ['styled-components'],
    format: 'esm',
});
