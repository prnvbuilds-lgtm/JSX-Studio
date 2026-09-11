<?php
/**
 * Plugin Name: JXP Guide Headless Custom Post Types & Taxonomies
 * Description: Registers Listing, Campaign, Partner Profile, Guide Post, Vertical, and Location with WPGraphQL support.
 * Version: 1.0.0
 * Author: JXP Studio
 */

// Deduplicate union possible types in WPGraphQL to prevent duplicate MenuItemObjectUnion type errors
add_filter('graphql_wp_union_type_config', function($config, $union) {
    if (!empty($config['typeNames']) && is_array($config['typeNames'])) {
        $config['typeNames'] = array_values(array_unique($config['typeNames']));
    }
    return $config;
}, 10, 2);

add_filter('graphql_union_possible_types', function($types, $config, $union) {
    if (is_callable($types)) {
        return function() use ($types) {
            $resolved = call_user_func($types);
            if (is_array($resolved)) {
                $unique = [];
                foreach ($resolved as $type) {
                    if (is_object($type) && isset($type->name)) {
                        $unique[$type->name] = $type;
                    } else {
                        $unique[] = $type;
                    }
                }
                return array_values($unique);
            }
            return $resolved;
        };
    }
    if (is_array($types)) {
        return array_values(array_unique($types));
    }
    return $types;
}, 10, 3);

add_action('init', function() {
    // 1. Listing (Hotels, Dining, Retreats, Experiences)
    if (!post_type_exists('listing')) {
        register_post_type('listing', [
            'labels' => [
                'name' => 'Listings',
                'singular_name' => 'Listing',
                'all_items' => 'All Listings',
                'add_new_item' => 'Add New Listing',
                'edit_item' => 'Edit Listing',
            ],
            'public' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'menu_position' => 5,
            'menu_icon' => 'dashicons-location-alt',
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'listing',
            'graphql_plural_name' => 'listings',
            'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'],
            'taxonomies' => ['vertical', 'location'],
        ]);
    }

    // 2. Campaign (Marketing, Promotions, Flash Perks)
    if (!post_type_exists('campaign')) {
        register_post_type('campaign', [
            'labels' => [
                'name' => 'Campaigns',
                'singular_name' => 'Campaign',
                'all_items' => 'All Campaigns',
                'add_new_item' => 'Add New Campaign',
                'edit_item' => 'Edit Campaign',
            ],
            'public' => true,
            'has_archive' => false,
            'show_in_menu' => true,
            'menu_position' => 6,
            'menu_icon' => 'dashicons-megaphone',
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'campaign',
            'graphql_plural_name' => 'campaigns',
            'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
            'taxonomies' => ['vertical'],
        ]);
    }

    // 3. Partner Profile (Partner Brand, Tier, Verification)
    if (!post_type_exists('partner_profile')) {
        register_post_type('partner_profile', [
            'labels' => [
                'name' => 'Partner Profiles',
                'singular_name' => 'Partner Profile',
                'all_items' => 'All Partner Profiles',
                'add_new_item' => 'Add New Partner Profile',
                'edit_item' => 'Edit Partner Profile',
            ],
            'public' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'menu_position' => 7,
            'menu_icon' => 'dashicons-groups',
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'partnerProfile',
            'graphql_plural_name' => 'partnerProfiles',
            'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
            'taxonomies' => [],
        ]);
    }

    // 4. Guide Post (Editorial Travel & Culture Articles)
    if (!post_type_exists('guide_post')) {
        register_post_type('guide_post', [
            'labels' => [
                'name' => 'Guide Posts',
                'singular_name' => 'Guide Post',
                'all_items' => 'All Guide Posts',
                'add_new_item' => 'Add New Guide Post',
                'edit_item' => 'Edit Guide Post',
            ],
            'public' => true,
            'has_archive' => true,
            'show_in_menu' => true,
            'menu_position' => 8,
            'menu_icon' => 'dashicons-book',
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'guidePost',
            'graphql_plural_name' => 'guidePosts',
            'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'],
            'taxonomies' => ['vertical', 'location'],
        ]);
    }

    // 5. Taxonomy: Vertical (Living, Dining, Events, Travel, Community)
    if (!taxonomy_exists('vertical')) {
        register_taxonomy('vertical', ['listing', 'campaign', 'guide_post'], [
            'labels' => [
                'name' => 'Verticals',
                'singular_name' => 'Vertical',
                'all_items' => 'All Verticals',
                'edit_item' => 'Edit Vertical',
            ],
            'public' => true,
            'hierarchical' => true,
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'vertical',
            'graphql_plural_name' => 'verticals',
        ]);
    }

    // 6. Taxonomy: Location (Destinations, Cities, Regions)
    if (!taxonomy_exists('location')) {
        register_taxonomy('location', ['listing', 'guide_post'], [
            'labels' => [
                'name' => 'Locations',
                'singular_name' => 'Location',
                'all_items' => 'All Locations',
                'edit_item' => 'Edit Location',
            ],
            'public' => true,
            'hierarchical' => true,
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'location',
            'graphql_plural_name' => 'locations',
        ]);
    }
});
