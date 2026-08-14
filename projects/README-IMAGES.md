# Youth Development Initiative Program - Image Guide

## Image Setup Instructions

### Directory Structure
```
projects/
├── images/
│   ├── workshop-1.jpg
│   ├── workshop-2.jpg
│   ├── workshop-3.jpg
│   ├── mentorship-1.jpg
│   ├── mentorship-2.jpg
│   ├── mentorship-3.jpg
│   ├── event-1.jpg
│   ├── event-2.jpg
│   ├── event-3.jpg
│   ├── training-1.jpg
│   ├── training-2.jpg
│   └── training-3.jpg
├── css/
│   ├── style.css
│   └── gallery.css
├── js/
│   └── gallery.js
├── index.html
├── about.html
├── service.html
├── contact.html
├── gallery.html
└── README-IMAGES.md
```

## Image Categories

### 1. Workshop Images (3 images)
- **workshop-1.jpg**: Leadership Workshop
  - Shows facilitator leading youth discussion
  - Size: 800x600px or similar
  
- **workshop-2.jpg**: Skills Development
  - Hands-on training activity
  - Size: 800x600px or similar
  
- **workshop-3.jpg**: Group Workshop
  - Team building or collaborative activity
  - Size: 800x600px or similar

### 2. Mentorship Images (3 images)
- **mentorship-1.jpg**: One-on-One Mentoring
  - Personal guidance session
  - Size: 800x600px or similar
  
- **mentorship-2.jpg**: Career Guidance
  - Professional discussing with youth
  - Size: 800x600px or similar
  
- **mentorship-3.jpg**: Goal Setting
  - Mentor and mentee planning together
  - Size: 800x600px or similar

### 3. Event Images (3 images)
- **event-1.jpg**: Community Gathering
  - Group photo or celebration event
  - Size: 800x600px or similar
  
- **event-2.jpg**: Program Launch
  - Inaugural event or kickoff
  - Size: 800x600px or similar
  
- **event-3.jpg**: Youth Networking
  - Youth with professionals
  - Size: 800x600px or similar

### 4. Training Images (3 images)
- **training-1.jpg**: Tech Skills Training
  - Students with computers/digital devices
  - Size: 800x600px or similar
  
- **training-2.jpg**: Academic Training
  - Classroom or tutoring session
  - Size: 800x600px or similar
  
- **training-3.jpg**: Professional Development
  - Career-focused workshop
  - Size: 800x600px or similar

## Recommended Image Specifications

### Format
- **File Type**: JPG or PNG
- **Compression**: Optimized for web (60-80% quality for JPG)
- **Resolution**: Minimum 800x600px
- **Aspect Ratio**: 4:3 (recommended) or 16:9

### Quality Guidelines
- High-resolution photos showing real activities
- Include diverse youth participants
- Show positive interactions and engagement
- Professional lighting and clear focus
- Images should be inspiring and inclusive

## Image Placeholder System

If you don't have images yet, the gallery will display:
- Gray placeholder boxes (250px height on desktop)
- Hover effects with semi-transparent overlay
- Text descriptions: category and activity name
- Images can be replaced by updating the `src` attribute

## Adding Custom Images

### Method 1: Using Local Images
1. Create an `images` folder in the project root
2. Add your JPG/PNG files with the names specified above
3. Ensure file names match exactly (case-sensitive)
4. Gallery will automatically load and display

### Method 2: Using External URLs
Edit `gallery.html` and replace image sources:
```html
<img src="images/workshop-1.jpg" alt="Workshop Session">
```
With:
```html
<img src="https://your-image-url.com/workshop-1.jpg" alt="Workshop Session">
```

### Method 3: Using Free Stock Images
Popular free image sources:
- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Pixabay (pixabay.com)
- Freepik (freepik.com)

Search for: "youth training", "mentoring", "workshop", "team building", "students learning"

## Gallery Features

### Interactive Features
1. **Filter System**: Users can filter by category
   - All
   - Workshops
   - Mentorship
   - Events
   - Training

2. **Lightbox View**: Click any image to view full-size with overlay

3. **Hover Effects**:
   - Image zoom effect
   - Gradient overlay with description
   - Smooth transitions

4. **Responsive Design**: Works on all screen sizes
   - Desktop: 3-4 columns
   - Tablet: 2-3 columns
   - Mobile: 1 column

## CSS Classes Reference

```css
.gallery-grid           /* Main gallery container */
.gallery-item           /* Individual gallery item */
.gallery-image          /* Image wrapper */
.image-overlay          /* Hover overlay */
.filter-buttons         /* Filter button container */
.filter-btn            /* Individual filter button */
.lightbox              /* Full-screen image viewer */
```

## JavaScript Functions

### filterGallery()
Filters gallery items by category
- Parameters: filter type (all, workshops, mentorship, events, training)
- No return value

### openLightbox()
Opens full-size image viewer
- Triggered on gallery item click
- ESC key closes lightbox

### closeLightbox()
Closes lightbox view
- Called by close button or overlay click

## SEO Optimization

### Alt Text Examples
```html
<!-- Already implemented in gallery.html -->
<img src="images/workshop-1.jpg" alt="Youth workshop session with facilitator">
<img src="images/mentorship-1.jpg" alt="One-on-one mentoring session">
<img src="images/event-1.jpg" alt="Youth development initiative community event">
```

### Meta Descriptions
Consider adding to page `<head>`:
```html
<meta name="description" content="View our Youth Development Initiative Program activities, workshops, and community impact through our photo gallery">
```

## Performance Tips

1. **Image Optimization**
   - Use tools like TinyPNG or ImageOptim
   - Reduce file size without losing quality
   - Target: 50-150KB per image

2. **Lazy Loading**
   - Consider using lazy loading for faster page load
   - Add `loading="lazy"` attribute to img tags

3. **Caching**
   - Leverage browser caching for images
   - Use CDN for faster delivery

## Troubleshooting

### Images Not Displaying
1. Check file names match exactly
2. Verify images folder exists
3. Check file paths in HTML
4. Open browser console for error messages

### Slow Loading
1. Optimize image file sizes
2. Reduce image dimensions
3. Use compression tools
4. Consider lazy loading

### Filter Not Working
1. Clear browser cache (Ctrl+F5)
2. Check JavaScript file is loaded
3. Verify data-category attributes match filter values
4. Check browser console for errors

## Accessibility

The gallery includes:
- Alt text for all images (screen reader friendly)
- Keyboard navigation (ESC to close lightbox)
- High contrast overlays
- Clear category labels

## Future Enhancements

Consider adding:
- Image carousel/slideshow
- Video integration
- Before/after comparison
- 360° panoramic images
- Social media integration
- Image comments/reviews
