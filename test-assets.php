<?php
// Test if assets directory and files exist
$assetsDir = __DIR__ . '/assets';
$cssFile = $assetsDir . '/root-BvoQiejM.css';
$jsFile = $assetsDir . '/entry.client-BEoLyGnd.js';

echo "Assets directory exists: " . (file_exists($assetsDir) ? "YES" : "NO") . "\n";
echo "CSS file exists: " . (file_exists($cssFile) ? "YES" : "NO") . "\n";
echo "JS file exists: " . (file_exists($jsFile) ? "YES" : "NO") . "\n";

if (file_exists($cssFile)) {
    echo "CSS file size: " . filesize($cssFile) . " bytes\n";
    echo "CSS file readable: " . (is_readable($cssFile) ? "YES" : "NO") . "\n";
}

if (file_exists($jsFile)) {
    echo "JS file size: " . filesize($jsFile) . " bytes\n";
    echo "JS file readable: " . (is_readable($jsFile) ? "YES" : "NO") . "\n";
}

// List assets directory
if (file_exists($assetsDir)) {
    echo "\nAssets directory contents:\n";
    $files = scandir($assetsDir);
    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..') {
            echo "- $file\n";
        }
    }
}
?>
