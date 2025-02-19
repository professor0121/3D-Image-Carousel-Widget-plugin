<?php
// Widget Class Definition;
namespace Elementor;

class Image_Carousel_Widget extends Widget_Base
{

    public function get_name()
    {
        return 'image_carousel_widget';
    }

    public function get_title()
    {
        return __('Image Carousel Widget', 'text-domain');
    }

    public function get_icon()
    {
        return 'eicon-carousel';
    }

    public function get_categories()
    {
        return ['general'];
    }

    protected function _register_controls()
    {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'text-domain'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'image_text_repeater',
            [
                'label'       => __('Image and Text', 'text-domain'),
                'type'        => Controls_Manager::REPEATER,
                'fields'      => [
                    [
                        'name'    => 'image',
                        'label'   => __('Image', 'text-domain'),
                        'type'    => Controls_Manager::MEDIA,
                        'default' => [
                            'url' => '', // Default empty
                        ],
                    ],
                    [
                        'name'    => 'heading',
                        'label'   => __('Heading', 'text-domain'),
                        'type'    => Controls_Manager::TEXT,
                        'default' => __('Default Heading', 'text-domain'),
                    ],
                    [
                        'name'    => 'description',
                        'label'   => __('Description', 'text-domain'),
                        'type'    => Controls_Manager::TEXTAREA,
                        'default' => __('Default Description', 'text-domain'),
                    ],
                ],
                'default'     => [
                    [
                        'image'       => ['url' => ''], // Ensure URL is set here
                        'heading'     => 'Image 1 Heading',
                        'description' => 'Image 1 Description',
                    ],
                    [
                        'image'       => ['url' => ''], // Default empty or valid URL
                        'heading'     => 'Image 2 Heading',
                        'description' => 'Image 2 Description',
                    ],
                ],
                'title_field' => '{{{ heading }}}', // Display heading in Elementor UI
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'heading_style_section',
            [
                'label' => __('Heading Style', 'text-domain'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label'     => __('Heading Color', 'text-domain'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .carousel-heading' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'heading_typography',
                'label'    => __('Heading Typography', 'text-domain'),
                'selector' => '{{WRAPPER}} .carousel-heading',
            ]
        );

        $this->add_responsive_control(
            'heading_margin',
            [
                'label'     => __('Heading Margin', 'text-domain'),
                'type'      => Controls_Manager::DIMENSIONS,
                'selectors' => [
                    '{{WRAPPER}} .carousel-heading' => 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
                ],
                'separator' => 'before',
            ]
        );

        $this->end_controls_section();

        // Now for Description Text
        $this->start_controls_section(
            'description_style_section',
            [
                'label' => __('Description Style', 'text-domain'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'description_color',
            [
                'label'     => __('Description Color', 'text-domain'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .carousel-description' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'description_typography',
                'label'    => __('Description Typography', 'text-domain'),
                'selector' => '{{WRAPPER}} .carousel-description',
            ]
        );

        $this->add_responsive_control(
            'description_margin',
            [
                'label'     => __('Description Margin', 'text-domain'),
                'type'      => Controls_Manager::DIMENSIONS,
                'selectors' => [
                    '{{WRAPPER}} .carousel-description' => 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
                ],
                'separator' => 'before',
            ]
        );

        $this->end_controls_section();

        //Now fatching the information of Autoplay
        $this->start_controls_section(
            'autoplay_and_looping',
            [
                'label' => __('Autoplay & Looping', '3d-image-carousel-widget'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'autoplay',
            [
                'label'        => __('Enable Autoplay', '3d-image-carousel-widget'),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __('Yes', '3d-image-carousel-widget'),
                'label_off'    => __('No', '3d-image-carousel-widget'),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        $this->add_control(
            'looping',
            [
                'label'        => __('Enable Looping', '3d-image-carousel-widget'),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __('Yes', '3d-image-carousel-widget'),
                'label_off'    => __('No', '3d-image-carousel-widget'),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        $this->end_controls_section();

        //Adding animation for it and now use it

        $this->start_controls_section(
            'animation_effects',
            [
                'label' => __('Animation Effects', 'text-domain'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );
        
        $this->add_control(
            'animation_effect',
            [
                'label'   => __('Choose Animation', 'text-domain'),
                'type'    => Controls_Manager::SELECT,
                'options' => [
                    ''              => __('None', 'text-domain'),
                    'fadeIn'        => __('Fade In', 'text-domain'),
                    'fadeInUp'      => __('Fade In Up', 'text-domain'),
                    'fadeInDown'    => __('Fade In Down', 'text-domain'),
                    'fadeInLeft'    => __('Fade In Left', 'text-domain'),
                    'fadeInRight'   => __('Fade In Right', 'text-domain'),
                    'zoomIn'        => __('Zoom In', 'text-domain'),
                    'zoomInUp'      => __('Zoom In Up', 'text-domain'),
                    'zoomInDown'    => __('Zoom In Down', 'text-domain'),
                    'zoomInLeft'    => __('Zoom In Left', 'text-domain'),
                    'zoomInRight'   => __('Zoom In Right', 'text-domain'),
                    'bounceIn'      => __('Bounce In', 'text-domain'),
                    'bounceInUp'    => __('Bounce In Up', 'text-domain'),
                    'bounceInDown'  => __('Bounce In Down', 'text-domain'),
                    'bounceInLeft'  => __('Bounce In Left', 'text-domain'),
                    'bounceInRight' => __('Bounce In Right', 'text-domain'),
                    'flipInX'       => __('Flip In X', 'text-domain'),
                    'flipInY'       => __('Flip In Y', 'text-domain'),
                    'rotateIn'      => __('Rotate In', 'text-domain'),
                ],
                'default' => '',
            ]
        );
        
        $this->add_control(
            'animation_duration',
            [
                'label'   => __('Animation Duration (Seconds)', 'text-domain'),
                'type'    => Controls_Manager::SLIDER,
                'size_units' => ['s'], // Using 's' (seconds) instead of 'ms' (milliseconds)
                'range'   => [
                    's' => [
                        'min' => 0.1,
                        'max' => 5,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'unit' => 's',
                    'size' => 1, // Default to 1 second
                ],
            ]
        );
        
        
        $this->add_control(
            'animation_delay',
            [
                'label'   => __('Animation Delay (ms)', 'text-domain'),
                'type'    => Controls_Manager::SLIDER,
                'size_units' => ['ms'],
                'range'   => [
                    'ms' => [
                        'min' => 0,
                        'max' => 5000,
                        'step' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'ms',
                    'size' => 0, // Default to 0ms
                ],
            ]
        );
        
        $this->end_controls_section();

        //Light Box intigraion for it 

        $this->start_controls_section(
            'lightbox_settings',
            [
                'label' => __('Lightbox Settings', 'text-domain'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );
        
        $this->add_control(
            'enable_lightbox',
            [
                'label'        => __('Enable Lightbox', 'text-domain'),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __('Yes', 'text-domain'),
                'label_off'    => __('No', 'text-domain'),
                'return_value' => 'yes',
                'default'      => 'no', // Default is OFF
            ]
        );
        
        $this->end_controls_section();

        //cube direction controlls
        $this->start_controls_section(
            'slider_settings',
            [
                'label' => __('Slider Settings', 'text-domain'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );
        
        $this->add_control(
            'slider_direction',
            [
                'label'   => __('Slider Direction', 'text-domain'),
                'type'    => Controls_Manager::SELECT,
                'options' => [
                    'horizontal' => __('Horizontal', 'text-domain'),
                    'vertical'   => __('Vertical', 'text-domain'),
                ],
                'default' => 'horizontal', // Default is Horizontal
            ]
        );
        
        $this->end_controls_section();
        
        
        
        

    }

    // protected function render()
    // {
    //     $settings = $this->get_settings_for_display();
    //     $items    = $settings['image_text_repeater']; // Get the repeater items

    //     if (empty($items)) {
    //         return;
    //     }
    //     echo '<div class="d3-image-carousel-widget">';
    //     // Adding HTML structure for both containers: Cube (first container) and Carousel (second container)
    //     echo '<div class="image-carousel-widget">';

    //     // Container to hold both the cube and the carousel side by side
    //     echo '<div class="containers-wrapper">';

    //     // First container (Cube - Using Swiper)
    //     echo '<div class="swiper-container cube-container " >';
    //     echo '<div class="swiper-wrapper customCssClass"    >';

    //     // Loop through each repeater item for the cube (each will be a slide)
    //     foreach ($items as $item) {
    //         $image_url = isset($item['image']['url']) ? $item['image']['url'] : '';
    //         $text      = isset($item['text']) ? $item['text'] : '';

    //         if ($image_url) {
    //             echo '<div class="swiper-slide cube-face">';
    //             echo '<img src="' . esc_url($image_url) . '" alt="">';
    //             echo '</div>';
    //         }
    //     }

    //     echo '</div>'; // End of swiper-wrapper
    //     echo '</div>'; // End of swiper-container
    //                    // Second container (Vertical Carousel - Using Swiper)
    //     echo '<div class="swiper-container vertical-carousel">';
    //     echo '<div class="swiper-wrapper">';

    //     // Loop through each repeater item for the vertical carousel
    //     foreach ($items as $item) {
    //         $image_url = isset($item['image']['url']) ? $item['image']['url'] : '';
    //         $text      = isset($item['text']) ? $item['text'] : '';

    //         if ($image_url) {
    //             echo '<div class="swiper-slide" style="display:flex;flex-direction:column">';
    //             echo '<img src="' . esc_url($image_url) . '" alt="">';
    //             echo '</div>';
    //         }
    //     }

    //     echo '</div>'; // End of swiper-wrapper
    //     echo '</div>'; // End of swiper-container

    //     echo '</div>'; // End of containers-wrapper

    //     echo '</div>'; // End of image-carousel-widget

    //     echo '<div class="text-swiper-slider swiper-container">'; // Add swiper-container class
    //     echo '<div class="swiper-wrapper">';                      // swiper-wrapper to hold the slides

    //     foreach ($items as $item) {
    //         $heading     = isset($item['heading']) ? $item['heading'] : '';
    //         $description = isset($item['description']) ? $item['description'] : '';

    //         if ($heading || $description) {
    //             echo '<div class="swiper-slide swiper-slide-text">'; // Add swiper-slide class
    //             echo '<h3 class="carousel-heading">' . esc_html($heading) . '</h3>';
    //             echo '<p class="carousel-description">' . esc_html($description) . '</p>';
    //             echo '</div>'; // End of swiper-slide
    //         }
    //     }

    //     echo '</div>'; // End of swiper-wrapper
    //     echo '</div>'; // End of swiper-container

    //     echo '</div>'; // End of 3d-image-carousel-widget
    // }

//     protected function render()
// {
//     $settings = $this->get_settings_for_display();
//     $items    = $settings['image_text_repeater']; // Get the repeater items

//     if (empty($items)) {
//         return;
//     }

//     // Get settings for autoplay, loop, animation delay, and duration
//     $autoplay  = !empty($settings['autoplay']) && $settings['autoplay'] === 'yes' ? 'true' : 'false';
//     $looping   = !empty($settings['looping']) && $settings['looping'] === 'yes' ? 'true' : 'false';
//     $animation_class  = !empty($settings['animation_effect']) ? 'animate__animated animate__' . esc_attr($settings['animation_effect']) : '';
//     $animation_delay  = !empty($settings['animation_delay']['size']) ? esc_attr($settings['animation_delay']['size']) : '0';
//     $animation_duration = !empty($settings['animation_duration']['size']) ? esc_attr($settings['animation_duration']['size']) : '1';

//     // Pass these settings to JavaScript using data attributes
//     echo '<div class="d3-image-carousel-widget" 
//         data-autoplay="' . esc_attr($autoplay) . '" 
//         data-loop="' . esc_attr($looping) . '" 
//         data-animation-delay="' . esc_attr($animation_delay) . '" 
//         data-animation-duration="' . esc_attr($animation_duration) . '">';

//     echo '<div class="image-carousel-widget">';
//     echo '<div class="containers-wrapper">';

//     // Cube container
//     echo '<div class="swiper-container cube-container">';
//     echo '<div class="swiper-wrapper customCssClass">';

//     foreach ($items as $item) {
//         $image_url = isset($item['image']['url']) ? $item['image']['url'] : '';

//         if ($image_url) {
//             echo '<div class="swiper-slide cube-face ' . esc_attr($animation_class) . '" 
//                     style="animation-delay:' . esc_attr($animation_delay) . 'ms; 
//                            animation-duration:' . esc_attr($animation_duration) . 's;">';
//             echo '<img src="' . esc_url($image_url) . '" alt="">';
//             echo '</div>';
//         }
//     }

//     echo '</div>'; // End swiper-wrapper
//     echo '</div>'; // End swiper-container

//     // Vertical Carousel container
//     echo '<div class="swiper-container vertical-carousel">';
//     echo '<div class="swiper-wrapper">';

//     foreach ($items as $item) {
//         $image_url = isset($item['image']['url']) ? $item['image']['url'] : '';

//         if ($image_url) {
//             echo '<div class="swiper-slide ' . esc_attr($animation_class) . '" 
//                     style="animation-delay:' . esc_attr($animation_delay) . 'ms; 
//                            animation-duration:' . esc_attr($animation_duration) . 's;">';
//             echo '<img src="' . esc_url($image_url) . '" alt="">';
//             echo '</div>';
//         }
//     }

//     echo '</div>'; // End swiper-wrapper
//     echo '</div>'; // End swiper-container

//     echo '</div>'; // End containers-wrapper
//     echo '</div>'; // End image-carousel-widget

//     // Text Swiper
//     echo '<div class="text-swiper-slider swiper-container">';
//     echo '<div class="swiper-wrapper">';

//     foreach ($items as $item) {
//         $heading     = isset($item['heading']) ? $item['heading'] : '';
//         $description = isset($item['description']) ? $item['description'] : '';

//         if ($heading || $description) {
//             echo '<div class="swiper-slide swiper-slide-text ' . esc_attr($animation_class) . '" 
//                     style="animation-delay:' . esc_attr($animation_delay) . 'ms; 
//                            animation-duration:' . esc_attr($animation_duration) . 's;">';
//             echo '<h3 class="carousel-heading">' . esc_html($heading) . '</h3>';
//             echo '<p class="carousel-description">' . esc_html($description) . '</p>';
//             echo '</div>';
//         }
//     }

//     echo '</div>'; // End swiper-wrapper
//     echo '</div>'; // End swiper-container
//     echo '</div>'; // End 3d-image-carousel-widget
// }




protected function render()
{
    $settings = $this->get_settings_for_display();
    $items    = $settings['image_text_repeater']; // Get the repeater items

    if (empty($items)) {
        return;
    }

    // Get settings for autoplay, loop, animation delay, duration, and lightbox
    $autoplay  = !empty($settings['autoplay']) && $settings['autoplay'] === 'yes' ? 'true' : 'false';
    $looping   = !empty($settings['looping']) && $settings['looping'] === 'yes' ? 'true' : 'false';
    $lightbox_enabled = !empty($settings['enable_lightbox']) && $settings['enable_lightbox'] === 'yes';
    $animation_class  = !empty($settings['animation_effect']) ? 'animate__animated animate__' . esc_attr($settings['animation_effect']) : '';
    $animation_delay  = !empty($settings['animation_delay']['size']) ? esc_attr($settings['animation_delay']['size']) : '0';
    $animation_duration = !empty($settings['animation_duration']['size']) ? esc_attr($settings['animation_duration']['size']) : '1';
    $slider_direction = !empty($settings['slider_direction']) ? esc_attr($settings['slider_direction']) : 'horizontal';


    echo $slider_direction;


    // Pass these settings to JavaScript using data attributes
    echo '<div class="d3-image-carousel-widget" 
        data-autoplay="' . esc_attr($autoplay) . '" 
        data-loop="' . esc_attr($looping) . '" 
        data-animation-delay="' . esc_attr($animation_delay) . '" 
        data-direction="' . esc_attr($slider_direction) . '" 
        data-animation-duration="' . esc_attr($animation_duration) . '">';

    echo '<div class="image-carousel-widget">';
    echo '<div class="containers-wrapper">';

    // Cube container
    echo '<div class="swiper-container cube-container">';
    echo '<div class="swiper-wrapper customCssClass">';

    foreach ($items as $item) {
        $image_url = isset($item['image']['url']) ? $item['image']['url'] : '';

        if ($image_url) {
            echo '<div class="swiper-slide cube-face ' . esc_attr($animation_class) . '" 
                    style="animation-delay:' . esc_attr($animation_delay) . 'ms; 
                           animation-duration:' . esc_attr($animation_duration) . 's;">';

            // Lightbox Enabled - Wrap Image in Anchor Tag
            if ($lightbox_enabled) {
                echo '<a href="' . esc_url($image_url) . '" data-fancybox="gallery">';
            }

            echo '<img src="' . esc_url($image_url) . '" alt="">';

            if ($lightbox_enabled) {
                echo '</a>';
            }

            echo '</div>';
        }
    }

    echo '</div>'; // End swiper-wrapper
    echo '</div>'; // End swiper-container

    // Vertical Carousel container
    echo '<div class="swiper-container vertical-carousel">';
    echo '<div class="swiper-wrapper">';

    foreach ($items as $item) {
        $image_url = isset($item['image']['url']) ? $item['image']['url'] : '';

        if ($image_url) {
            echo '<div class="swiper-slide ' . esc_attr($animation_class) . '" 
                    style="animation-delay:' . esc_attr($animation_delay) . 'ms; 
                           animation-duration:' . esc_attr($animation_duration) . 's;">';

            if ($lightbox_enabled) {
                echo '<a href="' . esc_url($image_url) . '" data-fancybox="gallery">';
            }

            echo '<img src="' . esc_url($image_url) . '" alt="">';

            if ($lightbox_enabled) {
                echo '</a>';
            }

            echo '</div>';
        }
    }

    echo '</div>'; // End swiper-wrapper
    echo '</div>'; // End swiper-container

    echo '</div>'; // End containers-wrapper
    echo '</div>'; // End image-carousel-widget

    // Text Swiper
    echo '<div class="text-swiper-slider swiper-container">';
    echo '<div class="swiper-wrapper">';

    foreach ($items as $item) {
        $heading     = isset($item['heading']) ? $item['heading'] : '';
        $description = isset($item['description']) ? $item['description'] : '';

        if ($heading || $description) {
            echo '<div class="swiper-slide swiper-slide-text ' . esc_attr($animation_class) . '" 
                    style="animation-delay:' . esc_attr($animation_delay) . 'ms; 

                           animation-duration:' . esc_attr($animation_duration) . 's;">';
            echo '<h3 class="carousel-heading">' . esc_html($heading) . '</h3>';
            echo '<p class="carousel-description">' . esc_html($description) . '</p>';
            echo '</div>';
        }
    }

    echo '</div>'; // End swiper-wrapper
    echo '</div>'; // End swiper-container
    echo '</div>'; // End 3d-image-carousel-widget
}


}
