# Web Material You

# Setup (after installation)
1. Open [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)
2. Choose your wallpaper/palette/...
3. Click 'Apply' in the top right corner
4. Enjoy.

# Implementation
Implementation is very simple. The palette will be saved in CSS variables:
Raw Colors: ```--myw-[accent1/accent2/accent3/neutral1/neutral2/error]/[0/10/50/100/200/300/400/500/600/700/800/900/1000]```

Light/Dark theme colors: ```--myw-[light/dark]-[primary/onPrimary/primaryContainer/onPrimaryContainer/secondary/onSecondary/secondaryContainer/onSecondaryContainer/tertiary/onTertiary/tertiaryContainer/onTertiaryContainer/error/errorContainer/onError/onErrorContainer/background/onBackground/surface/onSurface/surfaceVariant/onSurfaceVariant/outline/inverseOnSurface/inverseSurface]```

Light/Dark theme colors based on device dark/lightmode: ```--myw-[primary/onPrimary/primaryContainer/onPrimaryContainer/secondary/onSecondary/secondaryContainer/onSecondaryContainer/tertiary/onTertiary/tertiaryContainer/onTertiaryContainer/error/errorContainer/onError/onErrorContainer/background/onBackground/surface/onSurface/surfaceVariant/onSurfaceVariant/outline/inverseOnSurface/inverseSurface]```

The simplest way to prevent issues when the user doesn't have the extension installed is to use fallbacks.
Example of a fallback: ```var(--myw-surface, #FFFBFE)```

# Examples
[Example 1](https://github.com/TimTrayler/web-material-you/tree/master/example)

