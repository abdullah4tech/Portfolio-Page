# Favicon and Icon Specifications

## Required Icon Files

### Standard Favicons
- **favicon.ico**: 16x16, 32x32, 48x48 pixels (multi-size ICO file)
- **favicon-16x16.png**: 16x16 pixels
- **favicon-32x32.png**: 32x32 pixels

### Apple Touch Icons
- **apple-touch-icon.png**: 180x180 pixels (iOS Safari)

### PWA Icons
- **pwa-192x192.png**: 192x192 pixels (Android Chrome)
- **pwa-512x512.png**: 512x512 pixels (Android Chrome, splash screens)

## Design Guidelines

### Style
- **Theme**: Modern, minimal, professional
- **Colors**: Match the portfolio design
- **Background**: White (#ffffff) or transparent
- **Primary Color**: Dark gray (#374151) or black (#000000)

### Icon Concepts

#### Option 1: Initials
- **Design**: "AM" monogram
- **Font**: Yantramanav Bold
- **Style**: Clean, geometric letters
- **Background**: White circle with dark text

#### Option 2: Abstract Symbol
- **Design**: Geometric shape representing development
- **Elements**: Code brackets < > or forward slash /
- **Style**: Minimalist line art
- **Background**: Solid color or gradient

#### Option 3: Personal Logo
- **Design**: Custom symbol or mark
- **Style**: Scalable vector design
- **Elements**: Tech-focused imagery

### Technical Specifications

#### Color Requirements
- **Light Theme**: Dark icon on light background
- **Dark Theme Support**: Consider OS dark mode
- **Contrast**: Minimum 3:1 contrast ratio

#### File Formats
- **ICO**: Multi-resolution favicon.ico
- **PNG**: All other icons with transparency
- **SVG**: Scalable version for modern browsers

#### Optimization
- **File Size**: Keep under 10KB per icon
- **Compression**: Optimize PNG files
- **Quality**: Crisp edges, no anti-aliasing issues

## Implementation Checklist

### Required Files to Create
- [ ] favicon.ico (16x16, 32x32, 48x48)
- [ ] favicon-16x16.png
- [ ] favicon-32x32.png
- [ ] apple-touch-icon.png (180x180)
- [ ] pwa-192x192.png
- [ ] pwa-512x512.png

### Testing
- [ ] Browser tabs display correctly
- [ ] Bookmark icons appear properly
- [ ] Mobile home screen icons work
- [ ] PWA installation uses correct icon
- [ ] All sizes are crisp and clear

## Design Tools

### Recommended Tools
- **Favicon Generator**: realfavicongenerator.net
- **Figma**: For initial design
- **Photoshop**: Professional editing
- **Online Converters**: PNG to ICO conversion

### Quick Generation
1. Create a 512x512px master icon
2. Use favicon generator tools to create all sizes
3. Download and replace files in `/public` directory

## Current Implementation

The following files are already referenced in the HTML:
- `/favicon.ico` - Browser default
- `/favicon-16x16.png` - 16px version
- `/favicon-32x32.png` - 32px version
- `/apple-touch-icon.png` - iOS Safari
- `/pwa-192x192.png` - Android Chrome
- `/pwa-512x512.png` - Android Chrome large

## Brand Consistency

Icons should:
- Reflect the clean, professional portfolio aesthetic
- Use consistent colors with the website
- Be recognizable at small sizes
- Work well in both light and dark contexts
- Maintain visual hierarchy and clarity

## Accessibility

- Ensure sufficient contrast
- Test visibility at smallest sizes
- Consider colorblind-friendly design
- Provide meaningful visual representation

## File Naming Convention

Use exact filenames as specified to match the existing meta tag references in the HTML head section. Do not change filenames without updating corresponding HTML references.