<?php
/*
Plugin Name: 3D Image Carousel Widget
Plugin URI: https://yourwebsite.com/3d-image-carousel-widget
Description: A visually stunning custom Elementor widget that brings your website to life with a fully customizable 3D image carousel. Create captivating, interactive image sliders that engage your audience with smooth animations and immersive transitions.
Version: 1.0.1
Author: Abhishek Kushwaha
Author URI: https://yourwebsite.com
Text Domain: 3d-image-carousel-widget
Domain Path: /languages
License: GPL-2.0+
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Requires at least: 5.0
Tested up to: 6.0
Requires PHP: 7.0
Compatible with: Elementor 3.0+
GitHub Plugin URI: https://github.com/yourusername/3d-image-carousel-widget
*/

/* This plugin is licensed under the GPL-2.0+ License. */

// Prevent direct access
if (! defined('ABSPATH')) {
    exit;
}

// Enqueue Scripts and Styles
function enqueue_image_carousel_assets()
{
    wp_enqueue_script(
        'image-carousel-wigets-js',
        plugin_dir_url(__FILE__) . 'assets/js/image-carousel-wigets.js',
        ['jquery'],
        '1.0',
        true
    );
    wp_enqueue_style(
        'image-carousel-widget-css',
        plugin_dir_url(__FILE__) . 'assets/css/image-carousel-widget.css',
        [],
        '1.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_image_carousel_assets');

function enqueue_swiper_assets()
{
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');
    wp_enqueue_script('swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_swiper_assets');

// Register the Widget
function register_image_carousel_widget($widgets_manager)
{
    require_once __DIR__ . '/includes/class-image-carousel-widget.php';
    $widgets_manager->register(new \Elementor\Image_Carousel_Widget());
}
add_action('elementor/widgets/register', 'register_image_carousel_widget');
