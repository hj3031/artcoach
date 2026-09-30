import {build} from 'esbuild';
await build({entryPoints:['src/main.tsx'],bundle:true,outfile:'assets/app.js',format:'iife',platform:'browser',jsx:'automatic',minify:true,legalComments:'eof',loader:{'.png':'dataurl'},define:{'process.env.NODE_ENV':'"production"'}});
