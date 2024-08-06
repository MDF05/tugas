import path from "path"
import { fileURLToPath } from 'url';

function resolvePath(urlPath) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename); 

    return path.resolve(__dirname, urlPath);
}

export default(resolvePath)