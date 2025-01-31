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
            'text_style_section',
            [
                'label' => __('Text Style', 'text-domain'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'text_color',
            [
                'label'     => __('Text Color', 'text-domain'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .cube-text, {{WRAPPER}} .carousel-text' => 'color: {{VALUE}};',
                ],
            ]
        );
        $this->add_control(
            'text_bg_color',
            [
                'label'     => __('Background Color', 'text-domain'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .cube-text, {{WRAPPER}} .carousel-text' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'text_typography',
                'label'    => __('Typography', 'text-domain'),
                'selector' => '{{WRAPPER}} .cube-text, {{WRAPPER}} .carousel-text',
            ]
        );

        $this->add_responsive_control(
            'text_alignment',
            [
                'label'     => __('Text Alignment', 'text-domain'),
                'type'      => Controls_Manager::CHOOSE,
                'options'   => [
                    'left'   => [
                        'title' => __('Left', 'text-domain'),
                        'icon'  => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'text-domain'),
                        'icon'  => 'eicon-text-align-center',
                    ],
                    'right'  => [
                        'title' => __('Right', 'text-domain'),
                        'icon'  => 'eicon-text-align-right',
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .cube-text, {{WRAPPER}} .carousel-text' => 'text-align: {{VALUE}};',
                ],
                'default'   => 'center',
            ]
        );

        $this->end_controls_section();

    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
        $items    = $settings['image_text_repeater']; // Get the repeater items

        if (empty($items)) {
            return;
        }
        echo '<div class="d3-image-carousel-widget">';
        // Adding HTML structure for both containers: Cube (first container) and Carousel (second container)
        echo '<div class="image-carousel-widget">';

        // Container to hold both the cube and the carousel side by side
        echo '<div class="containers-wrapper">';

        // First container (Cube - Using Swiper)
        echo '<div class="swiper-container cube-container">';
        echo '<div class="swiper-wrapper">';

        // Loop through each repeater item for the cube (each will be a slide)
        foreach ($items as $item) {
            $image_url = isset($item['image']['url']) ? $item['image']['url'] : '';
            $text      = isset($item['text']) ? $item['text'] : '';

            if ($image_url) {
                echo '<div class="swiper-slide cube-face">';
                echo '<img src="' . esc_url($image_url) . '" alt="">';
                echo '</div>';
            }
        }

        echo '</div>'; // End of swiper-wrapper
        echo '</div>'; // End of swiper-container
                       // Second container (Vertical Carousel - Using Swiper)
        echo '<div class="swiper-container vertical-carousel">';
        echo '<div class="swiper-wrapper">';

        // Loop through each repeater item for the vertical carousel
        foreach ($items as $item) {
            $image_url = isset($item['image']['url']) ? $item['image']['url'] : '';
            $text      = isset($item['text']) ? $item['text'] : '';

            if ($image_url) {
                echo '<div class="swiper-slide">';
                echo '<img src="' . esc_url($image_url) . '" alt="">';
                echo '</div>';
            }
        }

        echo '</div>'; // End of swiper-wrapper
        echo '</div>'; // End of swiper-container

        echo '</div>'; // End of containers-wrapper

        echo '</div>'; // End of image-carousel-widget

        echo '<div class="text-swiper-slider swiper-container">'; // Add swiper-container class
        echo '<div class="swiper-wrapper">';                      // swiper-wrapper to hold the slides

        foreach ($items as $item) {
            $heading     = isset($item['heading']) ? $item['heading'] : '';
            $description = isset($item['description']) ? $item['description'] : '';

            if ($heading || $description) {
                echo '<div class="swiper-slide swiper-slide-text">'; // Add swiper-slide class
                echo '<h3 class="carousel-heading">' . esc_html($heading) . '</h3>';
                echo '<p class="carousel-description">' . esc_html($description) . '</p>';
                echo '</div>'; // End of swiper-slide
            }
        }

        echo '</div>'; // End of swiper-wrapper
        echo '</div>'; // End of swiper-container

        echo '</div>'; // End of 3d-image-carousel-widget
    }

}
