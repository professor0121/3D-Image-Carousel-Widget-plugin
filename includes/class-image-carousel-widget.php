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

    

    protected function _register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'text-domain'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'carousel_images',
            [
                'label' => __('Add Images', 'text-domain'),
                'type' => Controls_Manager::GALLERY,
                'default' => [],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'style_section',
            [
                'label' => __('Style', 'text-domain'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'full_image_width',
            [
                'label' => __('Full Image Width', 'text-domain'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['%'],
                'range' => [
                    '%' => [
                        'min' => 10,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => '%',
                    'size' => 100,
                ],
                'selectors' => [
                    '{{WRAPPER}} .full-image-container img' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'carousel_image_size',
            [
                'label' => __('Carousel Image Size', 'text-domain'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 50,
                        'max' => 00,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 100,
                ],
                'selectors' => [
                    '{{WRAPPER}} .carousel-container img' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'carousel_gap',
            [
                'label' => __('Carousel Gap', 'text-domain'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 10,
                ],
                'selectors' => [
                    '{{WRAPPER}} .carousel-container' => 'gap: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
        $images   = $settings['carousel_images'];

        if (empty($images)) {
            return;
        }

        echo '<div class="image-carousel-widget">';
        echo '<div class="full-image-container"></div>';
        echo '<div class="carousel-container">';
        foreach ($images as $image) {
            echo '<img src="' . esc_url($image['url']) . '" alt="">';
        }
        echo '</div>';
        echo '</div>';
    }
}
