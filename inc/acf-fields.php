<?php
/**
 *  Install Add-ons
 *  
 *  The following code will include all 4 premium Add-Ons in your theme.
 *  Please do not attempt to include a file which does not exist. This will produce an error.
 *  
 *  The following code assumes you have a folder 'add-ons' inside your theme.
 *
 *  IMPORTANT
 *  Add-ons may be included in a premium theme/plugin as outlined in the terms and conditions.
 *  For more information, please read:
 *  - http://www.advancedcustomfields.com/terms-conditions/
 *  - http://www.advancedcustomfields.com/resources/getting-started/including-lite-mode-in-a-plugin-theme/
 */ 

// Add-ons 
// include_once('add-ons/acf-repeater/acf-repeater.php');
// include_once('add-ons/acf-gallery/acf-gallery.php');
// include_once('add-ons/acf-flexible-content/acf-flexible-content.php');
// include_once( 'add-ons/acf-options-page/acf-options-page.php' );


/**
 *  Register Field Groups
 *
 *  The register_field_group function accepts 1 array which holds the relevant data to register a field group
 *  You may edit the array as you see fit. However, this may result in errors if the array is not compatible with ACF
 */

if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_programs',
		'title' => 'Programs',
		'fields' => array (
			array (
				'key' => 'field_52322002f9adc',
				'label' => 'Show Slider',
				'name' => 'show_slider',
				'type' => 'checkbox',
				'choices' => array (
					1 => 'Yes',
				),
				'default_value' => 1,
				'layout' => 'vertical',
			),
			array (
				'key' => 'field_52322018f9add',
				'label' => 'Select Slider',
				'name' => 'select_slider',
				'type' => 'post_object',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_52322002f9adc',
							'operator' => '==',
							'value' => '1',
						),
					),
					'allorany' => 'all',
				),
				'post_type' => array (
					0 => 'soliloquy',
				),
				'taxonomy' => array (
					0 => 'all',
				),
				'allow_null' => 0,
				'multiple' => 0,
			),
			array (
				'key' => 'field_52320a509485a',
				'label' => 'Show Page Title',
				'name' => 'show_page_title',
				'type' => 'checkbox',
				'choices' => array (
					1 => 'Yes',
				),
				'default_value' => 1,
				'layout' => 'vertical',
			),
			array (
				'key' => 'field_522f398e2859a',
				'label' => 'Welcome Text',
				'name' => 'welcome_text',
				'type' => 'textarea',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => 1000,
				'formatting' => 'br',
			),
			array (
				'key' => 'field_524066c71d79e',
				'label' => 'Program Header',
				'name' => 'program_header',
				'type' => 'text',
				'default_value' => 'Our Programs',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'none',
				'maxlength' => '',
			),
			array (
				'key' => 'field_522f38e328596',
				'label' => 'Program Units',
				'name' => 'coals_program_units',
				'type' => 'repeater',
				'sub_fields' => array (
					array (
						'key' => 'field_522f390d28597',
						'label' => 'Program Name',
						'name' => 'program_name',
						'type' => 'text',
						'column_width' => '',
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'formatting' => 'none',
						'maxlength' => '',
					),
					array (
						'key' => 'field_522f3a27b7922',
						'label' => 'Program Image',
						'name' => 'program_image',
						'type' => 'image',
						'column_width' => '',
						'save_format' => 'object',
						'preview_size' => 'thumbnail',
						'library' => 'all',
					),
					array (
						'key' => 'field_522f393128598',
						'label' => 'Program Page',
						'name' => 'program_page',
						'type' => 'page_link',
						'column_width' => '',
						'post_type' => array (
							0 => 'page',
						),
						'allow_null' => 0,
						'multiple' => 0,
					),
					array (
						'key' => 'field_522f394828599',
						'label' => 'Program Description',
						'name' => 'program_description',
						'type' => 'textarea',
						'column_width' => '',
						'default_value' => '',
						'placeholder' => '',
						'maxlength' => 500,
						'formatting' => 'br',
					),
				),
				'row_min' => 0,
				'row_limit' => '',
				'layout' => 'row',
				'button_label' => 'Add Program',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'page-home.php',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
				0 => 'the_content',
				1 => 'excerpt',
				2 => 'custom_fields',
				3 => 'format',
				4 => 'featured_image',
				5 => 'categories',
				6 => 'tags',
				7 => 'send-trackbacks',
			),
		),
		'menu_order' => 0,
	));

	register_field_group(array (
		'id' => 'acf_topics',
		'title' => 'Topics',
		'fields' => array (
			array (
				'key' => 'field_5248dn121d79e',
				'label' => 'Topics Header',
				'name' => 'topics_header',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'none',
				'maxlength' => '',
			),
			array (
				'key' => 'field_5270025250308',
				'label' => 'Topics',
				'name' => 'page-topics',
				'type' => 'repeater',
				'sub_fields' => array (
					array (
						'key' => 'field_5270029d50309',
						'label' => 'Topic Name',
						'name' => 'topic-name',
						'type' => 'text',
						'column_width' => '',
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'formatting' => 'none',
						'maxlength' => '',
					),
					array (
						'key' => 'field_527002b45030a',
						'label' => 'Topic Image',
						'name' => 'topic-image',
						'type' => 'image',
						'column_width' => '',
						'save_format' => 'object',
						'preview_size' => 'program-img',
						'library' => 'all',
					),
					array (
						'key' => 'field_527002d45030b',
						'label' => 'Topic Link',
						'name' => 'topic-link',
						'type' => 'page_link',
						'column_width' => '',
						'post_type' => array (
							0 => 'page',
							1 => 'people',
						),
						'allow_null' => 0,
						'multiple' => 0,
					),
					array (
						'key' => 'field_527003045030c',
						'label' => 'Topic Description',
						'name' => 'topic-description',
						'type' => 'wysiwyg',
						'column_width' => '',
						'default_value' => '',
						'toolbar' => 'basic',
						'media_upload' => 'no',
					),
				),
				'row_min' => 0,
				'row_limit' => '',
				'layout' => 'row',
				'button_label' => 'Add Topic',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page',
					'order_no' => 0,
					'group_no' => 0,
				),
				array (
					'param' => 'page_template',
					'operator' => '!=',
					'value' => 'page-home.php',
					'order_no' => 1,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
}
