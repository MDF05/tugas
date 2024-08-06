import fs from "fs"
import path from "path"

export default function deleteImage(name) {
    fs.rm(path.resolve(`assets/project/${name}.jpg`), (err) => {
        if (err) throw err

        return true
    })
}
