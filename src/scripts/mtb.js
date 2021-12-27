
let currentTheme = null


document.addEventListener('WO436F38AU_stealTheme', function(e) {
	currentTheme = e.detail.theme
});


function createMWCBtn({
    id = "",
    label,
    icon = "",
    trailingIcon = "",
    onClick,
    isSecondaryAction = false,
    isOutlined = true
}) {
    let mwcBtn = document.createElement("mwc-button")

    if(id.length > 0) {
        mwcBtn.setAttribute("id", id)
    }

    if(icon.length > 0) {
        mwcBtn.setAttribute("icon", icon)
    }

    if(trailingIcon.length > 0) {
        mwcBtn.setAttribute("trailingicon", trailingIcon)
    }

    if(isSecondaryAction) {
        mwcBtn.classList.add("secondary-action")
    }

    mwcBtn.setAttribute("label", label)
    mwcBtn.setAttribute("outlined", isOutlined)

    mwcBtn.onclick = onClick

    return mwcBtn
}


function injectThemeStealer() {
    let s = document.createElement("script")

    s.src = chrome.runtime.getURL("scripts/mtb-injected.js")

    document.body.appendChild(s)
}


function showHint(message, isError = false, dappear = 5) {
    if(appBarRight.firstChild.innerText == message) return

    let hint = document.createElement("span")

    hint.innerText = message

    hint.style.fontSize = "0.6rem"

    if(isError) hint.style.color = "var(--md-sys-error)"

    appBarRight.insertBefore(hint, appBarRight.firstChild)
    setTimeout(() => appBarRight.removeChild(hint), dappear*1000)
}


function log(message, m=console.log) {
    return m(`[WMY] ${message}`)
}


function saveTheme() {

    if(!currentTheme) {
        return showHint("Please regenerate your theme", 10)
    }

    chrome.storage.sync.set({
        theme: currentTheme
    }, () => {
        log("Theme applied successfully")
        showHint("Done.")
    })
}


let appBarRight = document.querySelector("#root").shadowRoot.querySelector("#app-bar-right")

appBarRight.insertBefore(createMWCBtn({
    id: "apply-web-theme-btn",
    label: "Apply",
    icon: "save",
    onClick: function() {
        log("Applying theme...")

        saveTheme()
    },
    isSecondaryAction: true
}), appBarRight.firstChild)

injectThemeStealer()
