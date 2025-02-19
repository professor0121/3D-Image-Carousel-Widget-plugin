# 3D Image Carousel Widget

**Description:**
A custom Elementor widget for a 3D image carousel.

**Version:**
1.0.0

**Author:**
Abhishke kushwaha

---

## Features

- Display a 3D image carousel.
- Automatically update the full image container with a 3D flip animation.
- Customize the full image width, carousel image size, and carousel gap.

## Installation

1. **Upload the plugin files to the `/wp-content/plugins/3D_Image_Carousel_Widget` directory, or install the plugin through the WordPress plugins screen directly.**
2. **Activate the plugin through the 'Plugins' screen in WordPress.**
3. **Go to Elementor editor and add the "Image Carousel Widget" to your page.**

## Usage

1. **Add the "Image Carousel Widget" to your Elementor page.**
2. **In the widget settings, add images to the carousel.**
3. **Customize the full image width, carousel image size, and carousel gap as needed.**

## Changelog

**Version 1.0**
- Initial release.

## Files

- **3D_Image_Carousel_Widget.php:** Main plugin file that enqueues scripts and registers the widget.
- **includes/class-image-carousel-widget.php:** Defines the widget class and its controls.
- **assets/js/image-carousel-widget.js:** JavaScript file for the widget functionality.
- **assets/css/image-carousel-widget.css:** CSS file for the widget styling.

## Example

# 3D Image Carousel Widget

**Description:**
A custom Elementor widget for a 3D image carousel.

**Version:**
1.0.1

**Author:**
Abhishek Kushwaha

---

## Features

- Display a 3D image carousel.
- Automatically update the full image container with a 3D flip animation.
- Customize the full image width, carousel image size, and carousel gap.

## Installation

1. **Upload the plugin files to the `/wp-content/plugins/3D_Image_Carousel_Widget` directory, or install the plugin through the WordPress plugins screen directly.**
2. **Activate the plugin through the 'Plugins' screen in WordPress.**
3. **Go to Elementor editor and add the "Image Carousel Widget" to your page.**

## Usage

1. **Add the "Image Carousel Widget" to your Elementor page.**
2. **In the widget settings, add images to the carousel.**
3. **Customize the full image width, carousel image size, and carousel gap as needed.**

## Changelog

**Version 1.0**
- Initial release.

**Version 1.0.1**
- Updated plugin description and metadata.

## Files

- **3D_Image_Carousel_Widget.php:** Main plugin file that enqueues scripts and registers the widget.
- **includes/class-image-carousel-widget.php:** Defines the widget class and its controls.
- **assets/js/image-carousel-widget.js:** JavaScript file for the widget functionality.
- **assets/css/image-carousel-widget.css:** CSS file for the widget styling.

## Documentation

### 3D_Image_Carousel_Widget.php

This is the main plugin file that enqueues the necessary scripts and styles and registers the widget with Elementor.

#### Plugin Metadata

- **Plugin Name:** 3D Image Carousel Widget
- **Plugin URI:** https://yourwebsite.com/3d-image-carousel-widget
- **Description:** A visually stunning custom Elementor widget that brings your website to life with a fully customizable 3D image carousel. Create captivating, interactive image sliders that engage your audience with smooth animations and immersive transitions.
- **Version:** 1.0.1
- **Author:** Abhishek Kushwaha
- **Author URI:** https://yourwebsite.com
- **Text Domain:** 3d-image-carousel-widget
- **Domain Path:** /languages
- **License:** GPL-2.0+
- **License URI:** https://www.gnu.org/licenses/gpl-2.0.html
- **Requires at least:** 5.0
- **Tested up to:** 6.0
- **Requires PHP:** 7.0
- **Compatible with:** Elementor 3.0+
- **GitHub Plugin URI:** https://github.com/professor0121/3d-image-carousel-widget

#### Functions

- **enqueue_image_carousel_assets()**
  - Enqueues the main JavaScript and CSS files for the widget.
  - Hooked to `wp_enqueue_scripts`.

- **enqueue_swiper_assets()**
  - Enqueues additional assets like Fancybox, Animate.css, and Swiper.js.
  - Hooked to `wp_enqueue_scripts`.

- **register_image_carousel_widget($widgets_manager)**
  - Registers the `Image_Carousel_Widget` class with Elementor.
  - Hooked to `elementor/widgets/register`.

### includes/class-image-carousel-widget.php

Defines the `Image_Carousel_Widget` class and its controls.

### assets/js/image-carousel-widget.js

JavaScript file for the widget functionality.

### assets/css/image-carousel-widget.css

CSS file for the widget styling.

## Example