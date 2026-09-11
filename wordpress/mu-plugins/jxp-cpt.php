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

// Enable GraphQL introspection for development
add_filter('graphql_is_introspection_allowed', '__return_true');

// Prevent 'vertical' and 'location' from ever being registered as Post Types (taxonomy term collision fix)
add_action('init', function() {
    if (post_type_exists('vertical')) {
        unregister_post_type('vertical');
    }
    if (post_type_exists('location')) {
        unregister_post_type('location');
    }
    $cptui_post_types = get_option('cptui_post_types');
    if (is_array($cptui_post_types) && (isset($cptui_post_types['vertical']) || isset($cptui_post_types['location']))) {
        unset($cptui_post_types['vertical'], $cptui_post_types['location']);
        update_option('cptui_post_types', $cptui_post_types);
    }
}, 5);

add_action('init', function() {

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

// Auto-seed sample demo data if listings are empty
add_action('init', function() {
    $existing = get_posts([
        'post_type' => 'listing',
        'post_status' => 'any',
        'numberposts' => 1,
    ]);

    if (!empty($existing)) {
        return; // Already populated
    }

    $samples = [
        [
            'title' => 'The Glasshouse Eco-Resort',
            'slug' => 'the-glasshouse-eco-resort',
            'excerpt' => 'Luxury sustainable sanctuary nestled in the lush tropical hills of Ubud.',
            'content' => 'A luxury sustainable sanctuary nestled in the lush tropical hills, offering panoramic forest views, organic dining, and private infinity plunge pools.',
            'vertical' => 'Living',
            'vertical_slug' => 'living',
            'location' => 'Bali',
            'location_slug' => 'bali',
            'meta' => [
                'tagline' => 'Sustainable architecture meets ultra-luxury in Ubud.',
                'price_tier' => '$$$$',
                'rating' => 4.95,
                'review_count' => 142,
                'address' => 'Jl. Raya Sayan No. 88, Ubud',
                'city' => 'Bali, Indonesia',
                'coordinates' => '-8.5193, 115.2435',
                'contact_phone' => '+62 361 889900',
                'contact_email' => 'concierge@glasshouseresort.com',
                'website_url' => 'https://glasshouseresort.com',
                'booking_url' => 'https://glasshouseresort.com/reserve',
                'verification_status' => 'verified',
                'partner_id' => 'partner-001',
            ],
        ],
        [
            'title' => 'Osteria Del Mare',
            'slug' => 'osteria-del-mare',
            'excerpt' => 'Michelin-starred seaside dining celebrating heritage coastal Italian gastronomy.',
            'content' => 'Michelin-starred seaside dining celebrating heritage coastal Italian gastronomy, fresh daily catch, and biodynamic natural wines.',
            'vertical' => 'Dining',
            'vertical_slug' => 'dining',
            'location' => 'Amalfi',
            'location_slug' => 'amalfi',
            'meta' => [
                'tagline' => 'Coastal gastronomy with cliffside Mediterranean vistas.',
                'price_tier' => '$$$',
                'rating' => 4.88,
                'review_count' => 215,
                'address' => 'Via Panoramica 12',
                'city' => 'Positano, Italy',
                'coordinates' => '40.6281, 14.4850',
                'contact_phone' => '+39 089 875000',
                'contact_email' => 'reservations@osteriadelmare.it',
                'website_url' => 'https://osteriadelmare.it',
                'booking_url' => 'https://osteriadelmare.it/table',
                'verification_status' => 'verified',
                'partner_id' => 'partner-002',
            ],
        ],
        [
            'title' => 'Komorebi Forest Onsen',
            'slug' => 'komorebi-forest-onsen',
            'excerpt' => 'Traditional Japanese ryokan with geothermal open-air cedar onsen baths.',
            'content' => 'Traditional Japanese ryokan with geothermal open-air cedar onsen baths, kaiseki multi-course dinners, and zen forest architecture.',
            'vertical' => 'Travel',
            'vertical_slug' => 'travel',
            'location' => 'Kyoto',
            'location_slug' => 'kyoto',
            'meta' => [
                'tagline' => 'Centuries-old healing waters and minimalist sanctuary.',
                'price_tier' => '$$$$',
                'rating' => 4.98,
                'review_count' => 98,
                'address' => 'Arashiyama Sagatenryuji',
                'city' => 'Kyoto, Japan',
                'coordinates' => '35.0116, 135.6778',
                'contact_phone' => '+81 75 871 0000',
                'contact_email' => 'stay@komorebi-onsen.jp',
                'website_url' => 'https://komorebi-onsen.jp',
                'booking_url' => 'https://komorebi-onsen.jp/book',
                'verification_status' => 'verified',
                'partner_id' => 'partner-003',
            ],
        ],
    ];

    foreach ($samples as $sample) {
        $post_id = wp_insert_post([
            'post_title' => $sample['title'],
            'post_name' => $sample['slug'],
            'post_content' => $sample['content'],
            'post_excerpt' => $sample['excerpt'],
            'post_status' => 'publish',
            'post_type' => 'listing',
        ]);

        if (is_wp_error($post_id) || !$post_id) {
            continue;
        }

        // Attach taxonomies
        if (!empty($sample['vertical'])) {
            wp_set_object_terms($post_id, [$sample['vertical']], 'vertical');
        }
        if (!empty($sample['location'])) {
            wp_set_object_terms($post_id, [$sample['location']], 'location');
        }

        // Attach ACF fields and post meta
        foreach ($sample['meta'] as $meta_key => $meta_val) {
            update_post_meta($post_id, $meta_key, $meta_val);
            update_post_meta($post_id, '_' . $meta_key, 'field_listing_' . $meta_key);
            if (function_exists('update_field')) {
                update_field($meta_key, $meta_val, $post_id);
            }
        }
    }
}, 20);

// --- Headless WordPress Mode: Route frontend to Next.js (port 3000) ---

// Override "Visit Site" in WP Admin bar to point to the Next.js frontend
add_action('admin_bar_menu', function($wp_admin_bar) {
    $frontend_url = getenv('FRONTEND_URL') ?: 'http://localhost:3000';

    $view_site = $wp_admin_bar->get_node('view-site');
    if ($view_site) {
        $view_site->href = $frontend_url;
        $view_site->meta['target'] = '_blank';
        $wp_admin_bar->add_node($view_site);
    }

    $site_name = $wp_admin_bar->get_node('site-name');
    if ($site_name) {
        $site_name->href = $frontend_url;
        $site_name->meta['target'] = '_blank';
        $wp_admin_bar->add_node($site_name);
    }
}, 80);

// Redirect WordPress public frontend visitors to Next.js site
add_action('template_redirect', function() {
    if (is_admin() || wp_doing_ajax() || wp_doing_cron() || defined('REST_REQUEST')) {
        return;
    }

    $request_uri = $_SERVER['REQUEST_URI'] ?? '/';

    // Never intercept API routes
    if (strpos($request_uri, '/graphql') === 0 || strpos($request_uri, '/wp-json') === 0) {
        return;
    }

    $frontend_url = getenv('FRONTEND_URL') ?: 'http://localhost:3000';

    // Redirect homepage to Next.js
    if (is_front_page() || is_home()) {
        wp_redirect($frontend_url, 302);
        exit;
    }

    // Redirect individual listing to Next.js listing route
    if (is_singular('listing')) {
        global $post;
        if ($post && !empty($post->post_name)) {
            wp_redirect($frontend_url . '/listing/' . $post->post_name, 302);
            exit;
        }
    }
});


