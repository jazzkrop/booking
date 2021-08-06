const fs = require('fs')

const style = fs.readFileSync('../build/css/style.css', 'utf-8')


let delete_root = false

for (let i = 0; i < html.length; i++) {
    if (html[i] == '') {
        writeComponent = false
        component = fs.readFileSync(component_path + '/' + componentName + '.html', 'utf-8')

        //regular expression for finding all components in html and replacing
        let re = new RegExp('{'+componentName+'}', "g")
        html = html.replace(re, component)

        //clear variables after usage
        componentName = ''
        component = ''
    }
    if (writeComponent) componentName += html[i]
    if (html[i] == '{') writeComponent = true
}
//write result to result
fs.writeFile(htmlResPath, html, (err) => {
    if (err) throw err
})