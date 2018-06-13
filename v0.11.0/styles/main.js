$(function () {
    function updateVersions() {
        if( $('#navbar-versions').length == 0)
        {
            $('#navbar ul').append('<li id="navbar-versions"><li class="dropdown">\n' +
                '  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Version: v0.11.0 <span class="caret"></span></a>\n' +
                '  <ul class="dropdown-menu">\n' +
                '    <li><a href="/bdn-docs-wip/">master</a></li>\n' +
                '    <li><a href="/bdn-docs-wip/v0.11.0/">v0.11.0</a></li>\n' +
                '    <li><a href="/bdn-docs-wip/v0.10.14/">v0.10.14</a></li>\n' +
                '    <li><a href="/bdn-docs-wip/v0.10.13/">v0.10.13</a></li>\n' +
                '    <li><a href="/bdn-docs-wip/v0.10.12/">v0.10.12</a></li>\n' +
                '  </ul>\n' +
                '</li></li>');
        }
    }
    updateVersions();
    $('#navbar').bind("DOMSubtreeModified", updateVersions);
});