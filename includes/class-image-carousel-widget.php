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
            'image_text_repeater',
            [
                'label' => __('Image and Text', 'text-domain'),
                'type' => Controls_Manager::REPEATER,
                'fields' => [
                    [
                        'name' => 'image',
                        'label' => __('Image', 'text-domain'),
                        'type' => Controls_Manager::MEDIA,
                        'default' => [
                            'url' => '',  // Default empty
                        ],
                    ],
                    [
                        'name' => 'text',
                        'label' => __('Text', 'text-domain'),
                        'type' => Controls_Manager::TEXT,
                        'default' => __('Default Text', 'text-domain'),
                    ],
                ],
                'default' => [
                    [
                        'image' => ['url' => ''], // Ensure URL is set here
                        'text'  => 'Image 1 Text',
                    ],
                    [
                        'image' => ['url' => ''], // Default empty or valid URL
                        'text'  => 'Image 2 Text',
                    ],
                ],
                'title_field' => '{{{ text }}}', // Display text in Elementor UI
            ]
        );
        
        

        $this->end_controls_section();

        $this->start_controls_section(
            'text_style_section',
            [
                'label' => __('Text Style', 'text-domain'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );
        
        $this->add_control(
            'text_color',
            [
                'label' => __('Text Color', 'text-domain'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .cube-text, {{WRAPPER}} .carousel-text' => 'color: {{VALUE}};',
                ],
            ]
        );
        $this->add_control(
            'text_bg_color',
            [
                'label' => __('Background Color', 'text-domain'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .cube-text, {{WRAPPER}} .carousel-text' => 'background-color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'text_typography',
                'label' => __('Typography', 'text-domain'),
                'selector' => '{{WRAPPER}} .cube-text, {{WRAPPER}} .carousel-text',
            ]
        );
        
        $this->add_responsive_control(
            'text_alignment',
            [
                'label' => __('Text Alignment', 'text-domain'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'text-domain'),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'text-domain'),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'text-domain'),
                        'icon' => 'eicon-text-align-right',
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .cube-text, {{WRAPPER}} .carousel-text' => 'text-align: {{VALUE}};',
                ],
                'default' => 'center',
            ]
        );
        
        $this->end_controls_section();
        
         
        
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $items = $settings['image_text_repeater'];  // Get the repeater items
    
        if (empty($items)) {
            return;
        }
    
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
                    $text = isset($item['text']) ? $item['text'] : '';
    
                    if ($image_url) {
                        echo '<div class="swiper-slide cube-face">';
                        echo '<img src="' . esc_url($image_url) . '" alt="">';
                        echo '<div class="cube-text">' . esc_html($text) . '</div>';
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
                    $text = isset($item['text']) ? $item['text'] : '';
    
                    if ($image_url) {
                        echo '<div class="swiper-slide">';
                        echo '<img src="' . esc_url($image_url) . '" alt="">';
                        echo '<div class="carousel-text">' . esc_html($text) . '</div>';
                        echo '</div>';
                    }
                }
    
                echo '</div>'; // End of swiper-wrapper
                echo '</div>'; // End of swiper-container
    
            echo '</div>'; // End of containers-wrapper
    
        echo '</div>'; // End of image-carousel-widget
    }
    

}
