var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(xhr.response);
        } else {
            callback(xhr.response);
        }
    };
    xhr.send();
};
var PrjectData = [];

function SetProjectData(data) {
    ProjectData = data;
    DrawProjectList("ProjectList");
}

function Start() {
    console.log("hi");

    getJSON("https://asixa.github.io/Data/Projects.json", SetProjectData);
}

function DrawProjectList(name) {
    var html = "";

    for (var p of ProjectData) {
        var code = '<div class="col-lg-4 col-md-4">' +
            '                            <div class="fh5co-blog animate-box">' +
            '                                <a href="#"><img class="img-responsive" src="{IMAGE_LINK}" alt=""></a>' +
            '                                <div class="blog-text">' +
            '                                    <div class="prod-title">' +
            '                                        <h3><a href="" #><strong>{NAME}</strong></a></h3>' +
            '                                        <span class="posted_by">March 2018</span>' +
            '                                        <span class="comment">Computer Grapihc</span>' +
            '                                        <p>A physical based offline path tracking renderer for personal research purpose.</p>' +
            '                                        <a href="#" class="btn btn-primary">Read More</a>' +
            '                                        <a href="{GITHUB}">' +
            '                                            <span class="comment" width="40">' +
            '												<img class="github" src="images/Logos/GitHub-Mark-64px.png" height="40" >' +
            '											</span>' +
            '                                        </a>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>';

        code.replace("{GITHUB}", p["Github"]);
        code.replace("{IMAGE_LINK}", p["Github"]);
        code.replace("{NAME}", p["Name"]);
        html += code;
    }
    document.getElementById(name).innerHTML = html;


}

function DrawPublicationList() {

    var myvar = '<div class="animate-box publication">' +
        '                        <div class="container">' +
        '                            <div class="col-md-3">' +
        '                                <a href="#"><img class="img-responsive" width="300" height="300" src="images/ALight.png" alt=""></a>' +
        '                            </div>' +
        '                            <div class="col-lg-8">' +
        '                                <h3>{NAME}</h3>' +
        '                                <p>{DESCRIPTION}</p>' +
        '                                <a href="#" class="btn btn-primary btn-lg">PDF</a>' +
        '                                <a href="#" class="btn btn-primary btn-lg">Official Page</a>' +
        '                            </div>' +
        '                        </div>' +
        '                        <hr/>' +
        '                    </div>';


}

function DrawExperienceList() {

}