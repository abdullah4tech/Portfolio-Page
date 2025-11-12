# Open Graph Image Specifications

## Design Requirements

### Dimensions
- **Size**: 1200x630 pixels (Facebook/LinkedIn optimal)
- **Aspect Ratio**: 1.91:1
- **File Format**: JPG or PNG
- **File Size**: Under 5MB (recommended under 1MB)

### Design Elements

#### Background
- **Primary Color**: Clean white (#ffffff) to match the portfolio design
- **Secondary**: Subtle gradient or particle effects similar to the website
- **Style**: Modern, minimal, professional

#### Typography
- **Main Font**: Yantramanav (same as website)
- **Primary Text**: "Abdullah O. Mustapha"
- **Secondary Text**: "Software Engineer & Full-Stack Developer"
- **Accent Text**: "Vue.js • TypeScript • Scalable Applications"

#### Color Palette
- **Primary Text**: Dark gray (#374151)
- **Secondary Text**: Medium gray (#6B7280)
- **Accent**: Black (#000000)
- **Background**: White (#ffffff)
- **Particles**: Light gray (#d1d5db) with 40% opacity

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│  ○ ○ ○                                        ○ ○ ○ ○   │  <- Subtle particles
│     ○ ○                                    ○ ○          │
│                                                         │
│           Abdullah O. Mustapha                          │  <- Main heading (48px)
│                                                         │
│        Software Engineer & Full-Stack Developer        │  <- Subtitle (24px)
│                                                         │
│         Vue.js • TypeScript • Scalable Applications    │  <- Skills (18px)
│                                                         │
│  ○ ○                                              ○ ○   │  <- More particles
│    ○ ○ ○                                      ○ ○ ○     │
└─────────────────────────────────────────────────────────┘
```

### Text Specifications

#### Main Heading
- **Text**: "Abdullah O. Mustapha"
- **Font Size**: 48px
- **Font Weight**: 500 (Medium)
- **Color**: #000000
- **Position**: Center, top 40% of image

#### Subtitle
- **Text**: "Software Engineer & Full-Stack Developer"
- **Font Size**: 24px
- **Font Weight**: 300 (Light)
- **Color**: #374151
- **Style**: Italic
- **Position**: Center, below main heading

#### Skills/Technologies
- **Text**: "Vue.js • TypeScript • Scalable Applications"
- **Font Size**: 18px
- **Font Weight**: 400 (Regular)
- **Color**: #6B7280
- **Position**: Center, bottom section

### Design Elements

#### Particles
- **Style**: Small circles similar to website animation
- **Sizes**: 2px, 3px, 4px diameter
- **Color**: #d1d5db with 40% opacity
- **Distribution**: Scattered around the edges, avoiding text areas
- **Count**: 15-20 particles total

#### Additional Elements
- **Subtle Shadow**: Light drop shadow behind text for depth
- **Border**: Optional thin border in light gray
- **Logo**: Small personal logo/icon if available

### Tools for Creation
- **Figma**: Recommended for design
- **Canva**: Alternative option
- **Photoshop**: Professional option
- **Sketch**: Mac alternative

### File Naming
- **Primary**: `og-image.jpg`
- **Fallback**: `og-image.png`
- **Retina**: `og-image@2x.jpg` (2400x1260px)

### Testing
Test the image on:
- Facebook Sharing Debugger
- Twitter Card Validator
- LinkedIn Post Inspector
- WhatsApp link preview

### Implementation
Once created, place the file in the `/public` directory as `og-image.jpg` and it will be automatically referenced by all the meta tags throughout the application.

### Accessibility
- Ensure text has sufficient contrast
- Keep text readable at small sizes
- Include alt text in meta tags (already implemented)

### Brand Consistency
The image should reflect the same clean, professional aesthetic as the portfolio website with consistent typography and color usage.