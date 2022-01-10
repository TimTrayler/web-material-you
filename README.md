# Web Material You

# [Download](https://github.com/TimTrayler/web-material-you/releases/latest/download/wmy.crx)

# Setup (after installation)
1. Open [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)
2. Choose your wallpaper/palette/...
3. Click 'Apply' in the top right corner
4. Enjoy.

# Implementation
Implementation is very simple. The palette will be saved in CSS variables:
Raw Colors: ```--myw-[accent1/accent2/accent3/neutral1/neutral2/error]/[0/10/50/100/200/300/400/500/600/700/800/900/1000]```

Light/Dark theme colors: ```--myw-[light/dark]-[primary/on-primary/primary-container/on-primary-container/secondary/on-secondary/secondary-container/on-secondary-container/tertiary/on-tertiary/tertiary-container/on-tertiary-container/error/error-container/on-error/on-error-container/background/on-background/surface/on-surface/surface-variant/on-surface-variant/outline/inverse-on-surface/inverse-surface]```

Light/Dark theme colors based on device dark/lightmode: ```--myw-[primary/on-primary/primary-container/on-primary-container/secondary/on-secondary/secondary-container/on-secondary-container/tertiary/on-tertiary/tertiary-container/on-tertiary-container/error/error-container/on-error/on-error-container/background/on-background/surface/on-surface/surface-variant/on-surface-variant/outline/inverse-on-surface/inverse-surface]```

The simplest way to prevent issues when the user doesn't have the extension installed is to use fallbacks.
Example of a fallback: ```var(--myw-surface, #FFFBFE)```

# Examples
[Example 1](https://github.com/TimTrayler/web-material-you/tree/master/example)

