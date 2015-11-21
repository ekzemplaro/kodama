<?php
function list_file ()
{
$updir = "./";
$rpath= realpath($updir);
$fldr = opendir ($rpath);
$array = array ();
while ($obj = readdir ($fldr))
{
	$llx = strlen ($obj);
	if (4 < $llx)
		{
		$ppx = strpos ($obj,".doc");
		if (0 < $ppx)
		{
		array_push ($array,$obj);
		}
		}
}

sort ($array);

echo '<table id="file_list">';

foreach ($array as $fname)
{
	echo "<tr>";
	echo "<td>";
	$file_aa = $fname;
//	echo $data . '<br />';
	echo '<a href="' . $file_aa . '">' . $fname . '</a>';
	echo "</td>";

	$date_aa = date ("Y-m-d H:i",filemtime ($file_aa));

	$size_aa = round (filesize ($file_aa) / 1024) . "KB";

	echo "<td>" . $size_aa . "</td>";
	echo "<td>" . $date_aa . "</td>";

	echo "</tr>";
}

closedir ($fldr);
echo "</table>";

}
?>
