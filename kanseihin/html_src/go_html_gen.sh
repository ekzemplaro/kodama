HTML_CREATE=/var/www/data_base/lang/examples/bash/html_create
#
$HTML_CREATE/html_create.sh py /tmp/tmp0198.html
#
awk '!/Return/{print $0}' /tmp/tmp0198.html >  kanseihin_src.html
