<?php
/*
Plugin Name: 3D Image Carousel Widget
Description: A custom Elementor widget for a 3D image carousel.
Version: 1.0.1
Author: Abhishek kushwaha
*/

// Prevent direct access
if (! defined('ABSPATH')) {
    exit;
}

// Enqueue Scripts and Styles
function enqueue_image_carousel_assets()
{
    wp_enqueue_script(
        'test2-js',
        plugin_dir_url(__FILE__) . 'assets/js/test2.js',
        ['jquery'],
        '1.0',
        true
    );
    // wp_enqueue_script(
    //     'test-js',
    //     plugin_dir_url(__FILE__) . 'assets/js/test.js',
    //     ['jquery'],
    //     '1.0',
    //     true
    // );
    // wp_enqueue_script(
    //     'image-carousel-widget-js',
    //     plugin_dir_url(__FILE__) . 'assets/js/image-carousel-widget.js',
    //     ['jquery'],
    //     '1.0',
    //     true
    // );
    wp_enqueue_style(
        'image-carousel-widget-css',
        plugin_dir_url(__FILE__) . 'assets/css/image-carousel-widget.css',
        [],
        '1.0'
    );

    
}
add_action('wp_enqueue_scripts', 'enqueue_image_carousel_assets');

function enqueue_swiper_assets() {
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
