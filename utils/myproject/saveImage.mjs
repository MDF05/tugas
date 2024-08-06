import fs from "fs"
import path from "path"


export default function saveImage(buffer, name) {
    fs.writeFile(`${path.resolve("assets/project/" + name)}.jpg`, buffer, (err) => {
        if (err) throw err

        return true
    })
}
