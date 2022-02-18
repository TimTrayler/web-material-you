
const accents = {
    "primary": "accent1",
    "secondary": "accent2",
    "tertiary": "accent3",
    "neutral": "neutral1",
    "neutralVariant": "neutral2",
    "error": "error"
}

const luminances = {
    0: 1000,
    10: 900,
    20: 800,
    30: 700,
    40: 600,
    50: 500,
    60: 400,
    70: 300,
    80: 200,
    90: 100,
    95: 50,
    99: 10,
    100: 0
}

function isLightmode() {
    return window.matchMedia("(prefers-color-scheme: light)").matches
}

chrome.storage.sync.get(["theme"], function(result) {
    const theme = result.theme

    let style = document.createElement("style")

    style.classList.add("myw-colors")

    style.innerHTML += `:root {`

    for(let [an, av] of Object.entries(accents)) {
        for(let [ln, lv] of Object.entries(luminances)) {
            switch(av) {
                case 'accent1':
                    av = 'primary'
                    break

                case 'accent2':
                    av = 'secondary'
                    break

                case 'accent3':
                    av = 'tertiary'
                    break

                case 'neutral1':
                    av = 'neutral'
                    break

                case 'neutral2':
                    av = 'neutral-variant'
                    break
            }

            style.innerHTML += `--md-sys-ref-${av}-${lv}: ` + theme[an][`luminance${ln}`] + ";\n"
        }
    }

    for(let themeName of ["dark", "light"]) {
        for(let cN of Object.keys(theme[themeName])) {
            // Convert lower camel case ('primaryContainer') to kebab case ('primary-container')
            let nCN = cN.replace(/([A-Z])/g, '-$1').toLowerCase()

            style.innerHTML += `--md-sys-color-${themeName}-${nCN}: ` + theme[themeName][cN] + ";\n"

            if((isLightmode() && themeName === "light") || (!isLightmode() && themeName === "dark")) {
                style.innerHTML += `--md-sys-color-${nCN}: ` + theme[themeName][cN] + ";\n"
            }
        }
    }

    style.innerHTML += `}`

    document.head.appendChild(style)
})
