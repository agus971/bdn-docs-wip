$(function () {
    function updateVersions() {
        if( $('#breadcrumb-versions').length == 0)
        {
            $('#breadcrumb ul').prepend('<li id="breadcrumb-versions"><div class="btn-group">\n' +
                '    <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                '        BenchmarkDotNet: master <span class="caret"></span>\n' +
                '    </button>\n' +
                '    <ul class="dropdown-menu">\n' +
                '        <li><a href="/v0.10.14/">v0.10.14</a></li>\n' +
                '        <li><a href="/v0.10.13/">v0.10.13</a></li>\n' +
                '        <li><a href="/v0.10.12/">v0.10.12</a></li>\n' +
                '    </ul>\n' +
                '</div></li>');
        }
    }
    updateVersions();
    $('#breadcrumb').bind("DOMSubtreeModified", updateVersions);
});