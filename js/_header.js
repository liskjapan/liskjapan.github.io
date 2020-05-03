function header(){
    var html = "";
    html += '<nav class="navbar navbar-expand-md navbar-dark fixed-top header-bar">';
    html += '<a class="navbar-brand" href="https://www.liskjapan.org/"><img alt="Lisk Japan" src="img/lisk_japan_logo-white.svg" width="120"></a>';
    html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i></button>';
    html += '<div class="collapse navbar-collapse pt-3" id="navbarCollapse">';
    html += '<ul class="navbar-nav mx-auto">';
    html += '<li class="nav-item active pt-1 pl-4 h6"><a class="nav-link ml-3" href="https://www.liskjapan.org/">What is Lisk?</a></li>';
    html += '<li class="nav-item active pt-1 pl-4 h6"><a class="nav-link ml-3" href="https://www.liskjapan.org/sidechain.html">Sidechain</a></li>';
    html += '<li class="nav-item active pt-1 pl-4 pr-5 h6"><a class="nav-link ml-3" href="https://www.liskjapan.org/about.html">About</a></li>';
    html += '</ul>';
    html += '</div>';
    html += '</nav>';
document.write(html);
}