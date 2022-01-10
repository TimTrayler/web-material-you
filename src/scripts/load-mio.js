
chrome.storage.sync.get(["theme"], function(result) {
    const theme = result.theme

    let style = document.createElement("style")
    let themeName = "light"

    style.classList.add("mio-colors")

    style.innerHTML += `:root {`

    for(let cN of Object.keys(theme[themeName])) {
        // Convert lower camel case ('primaryContainer') to kebab case ('primary-container')
        let nCN = cN.replace(/([A-Z])/g, '-$1').toLowerCase()

        style.innerHTML += `--mio-theme-color-${nCN}: ` + theme[themeName][cN] + " !important;\n"
    }

    style.innerHTML += `--mio-theme-color-primary-200: ${theme["primary"]["luminance80"]};`
    style.innerHTML += `--mio-theme-color-primary-700: ${theme["primary"]["luminance30"]};`
    style.innerHTML += `--mio-theme-color-primary-800: ${theme["primary"]["luminance20"]};`

    style.innerHTML += `--mio-theme-color-ref-secondary-200: ${theme["secondary"]["luminance80"]};`
    style.innerHTML += `--mio-theme-color-ref-secondary-300: ${theme["secondary"]["luminance70"]};`

    style.innerHTML += `--mio-theme-color-ref-neutral-100: ${theme["neutral"]["luminance90"]};`
    style.innerHTML += `--mio-theme-color-ref-neutral-200: ${theme["neutral"]["luminance80"]};`

    style.innerHTML += `--mio-theme-color-ref-neutral-variant-50: ${theme["neutralVariant"]["luminance95"]};`

    style.innerHTML += `}`

    document.head.append(style)
});
