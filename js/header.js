function header(){
    var html = "";
    html += '<nav class="navbar navbar-expand-md navbar-dark fixed-top header-bar">';
    html += '<a class="navbar-brand" href="index.html"><img alt="Lisk Japan" src="img/lisk_japan_logo-white.svg" width="120"></a>';
    html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i></button>';
    html += '<div class="collapse navbar-collapse pt-3" id="navbarCollapse">';
    html += '<ul class="navbar-nav mx-auto">';
    html += '<li class="nav-item active pt-1 pl-4 h6"><a class="nav-link ml-3" href="index.html">TOP</a></li>';
    html += '<li class="nav-item active pt-1 pl-4 h6"><a class="nav-link ml-3" href="poc-liskbike.html">概念実証</a></li>';
    html += '<li class="nav-item active pt-1 pl-4 h6"><a class="nav-link ml-3" href="what-is-lisk.html">Liskとは?</a></li>';
    html += '<li class="nav-item active pt-1 pl-4 pr-5 h6"><a class="nav-link ml-3" href="enterprise.html">企業での活用</a></li>';
    html += '</ul>';
    html += '</div>';
    html += '</nav>';
document.write(html);
}