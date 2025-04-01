import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

try {
  const indexPath = resolve('./dist/index.html');
  const notFoundPath = resolve('./dist/404.html');
  
  const indexContent = readFileSync(indexPath, 'utf8');
  writeFileSync(notFoundPath, indexContent);
  
  console.log('Successfully copied index.html to 404.html');
} catch (error) {
  console.error('Error copying index.html to 404.html:', error);
} 