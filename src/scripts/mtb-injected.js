module$exports$google3$ux$material$theme_generator$src$theme$base$ThemeAdapterBase.prototype.save = function() {
    const theme = {
        light: this.light,
        dark: this.dark,
        androidLight: module$exports$google3$ux$material$theme_generator$flags$SHOW_ANDROID ? this.androidLight : void 0,
        androidDark: module$exports$google3$ux$material$theme_generator$flags$SHOW_ANDROID ? this.androidDark : void 0,
        primary: this.primaryGroup,
        secondary: this.secondaryGroup,
        tertiary: this.tertiaryGroup,
        neutral: this.neutralGroup,
        neutralVariant: this.neutralVariantGroup,
        error: this.errorGroup,
        styles: this.styles,
        source: this.source
    };

    console.log("saved theme", theme);

    // "Steal" theme
    document.dispatchEvent(new CustomEvent('WO436F38AU_stealTheme', {
        detail: {
            theme
        }
    }));

    return theme
}