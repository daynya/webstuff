<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'tngn4WjQsfo0hXBFtKz7uioo3gqC8ZhT2bHAGGRC4fyy3kxF+yjtQWmF+B32DqvqiJhsO5thM9DbR6xFiywd6g==');
define('SECURE_AUTH_KEY',  'UENvInCj1Qo16WRUfNjidZoa5h26hiTq1wXsCfYlvOVZBydvuUwJ59YdTCObSXBJdzQJpsbKzmBQzLnfyOjWNQ==');
define('LOGGED_IN_KEY',    'vLKeI1RiMi5FnRzgHxHYeicNaplFynNxkEGqwpm7lDIh7yEEI8CG9arUc7XuWXHJilnI7hiVIGAo9pjKj7XKNw==');
define('NONCE_KEY',        'NwU+m2TUZOHZAi5WBTSHQrHFWSD5LK2aFw0wC66iZhOLsE2xnCnEcEoHoT3aNrJOSl9qX5dcvbiXFklZBuYmEw==');
define('AUTH_SALT',        'YkKt8vUPaDtt2SeeFCt+Sx/DpmOJ9H8wc4DUNqs99oh8HVlK69UxJJ0RDjZEE5IB02F+iFkUH4jzamzhlqHirA==');
define('SECURE_AUTH_SALT', 'O6qAVknP0JEKCULbZta3z60YE1/IOfv4p9E2r+mMHBDo3aCRwfwXXSOmHS5ponoJkK7KTKV0sFPxA0JUAnriDA==');
define('LOGGED_IN_SALT',   'n78i1YuqHbFyvpD6BzrdJ2iLf4JynKKi43pqed+1aGE3wDsV208D+vP98UpfPWRKqCrFkcIqf5uNO4olPOLRQQ==');
define('NONCE_SALT',       'qqNs4eJ7LlgbyvrrsrrnEj6y/l7szgMzILGv8OJi8oQzj4obK1AfzapM97KaJqBqrHC8RJNCugeyvyqITG6w7A==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
