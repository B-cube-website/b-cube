import fs from 'fs';
import path from 'path';
import ini from 'ini';


interface Config {
  [key: string]: any;
}

const configPath: string = path.join(__dirname, '../../.vercel/config');
const configContent: string = fs.readFileSync(configPath, 'utf8');
const config: Config = ini.parse(configContent);


export const ociConfig: Config = config;
