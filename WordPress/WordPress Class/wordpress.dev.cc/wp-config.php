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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpresDBug7r');

/** MySQL database username */
define('DB_USER', 'wordpresDBug7r');

/** MySQL database password */
define('DB_PASSWORD', 'ugUMD2ulSJ');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'EP6Am*Lo@Nc@0cBR!0Qg0F,QgFrvBQ^bBQZs:GsSh1GswG|4ko8N:Zs8Cs!g}FD');
define('SECURE_AUTH_KEY',  '~Z[o_CV!hwGK-Zs:Cs!gu.ET*;eDT.#Sm2x]Wa]9~Le];at9Or7Qr,QEq,QT^3fE');
define('LOGGED_IN_KEY',    'm]p*LHW_;a+,3cr73Fr{Yn3Er^Qf,j$A^3X6Pq*Pf!Nd}CcsCR0cv0Fr,k0JvzJ>7');
define('NONCE_KEY',        '^buEq.Gs|Rh!0dsC!0cvCFs!Rg}r,RU^4gv2hx1Hx#S1Hw#GW#5hGZ|5Vl5KwVlX');
define('AUTH_SALT',        '-V!4gk0Jv|k4Fso@JY,09a#2etp5Lxp5Lt_OKa_1d_~:Zp1G~:${YUj{By>Uj{A7f');
define('SECURE_AUTH_SALT', 'kNzv,Qc>Jv,McY,3crIY^{Yjs_Zp1Gs_OKZ!1osKZ!1:Zk0G@:Vkg}CkzRgm+HDT');
define('LOGGED_IN_SALT',   'fm3Iu*Lm2ENdZ|4c@JZ!0}Yk0F@}Ykg}BnzFg}7jzvBMz3DS~]WSh[9l#Sd[|5hs8');
define('NONCE_SALT',       'EXx2eq62Hq*Lm2Dpm+DS]9ix^@}UjBQ$>Ujf{7jyQf>73fu7M,3bq63Eq{Xmw!NKZ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define('FS_METHOD', 'direct');

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
