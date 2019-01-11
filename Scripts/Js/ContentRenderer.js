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
var AwardData = [];

function SetProjectData(data) {
    ProjectData = data;
    DrawProjectList("ProjectList");
}

function SetAwardData(data) {
    AwardData = data;
    DrawAwardList("AwardList");
}

function Start() {
    getJSON("https://xingyuchen.me/Data/Projects.json", SetProjectData);
    getJSON("https://xingyuchen.me/Data/Awards.json", SetAwardData);
}

function DrawProjectList(name) {
    var html = "";

    for (var p of ProjectData) {

        var code = '<div class="col-lg-4 col-md-4">' +
            '                            <div class="fh5co-blog ">' +
            '                                <a href="#"><img class="img-responsive" src="' + p["Image"] + '" alt=""></a>' +
            '                                <div class="blog-text">' +
            '                                    <div class="prod-title">' +
            '                                        <h3><a href="" #><strong>' + p["Name"] + '</strong></a></h3>' +
            '                                        <span class="posted_by">' + p["Date"] + '</span>' +
            '                                        <span class="comment">' + p["Field"] + '</span>' +
            '                                        <p>' + p["Description"] + '</p>' +
            '                                        <a href="' + p["Page"] + '" class="btn btn-primary">Read More</a>' +
            '                                        <a href="' + p["Github"] + '">' +
            '                                            <span class="comment" width="40">' +
            '												<img class="github" src="images/Logos/GitHub-Mark-64px.png" height="40" >' +
            '											</span>' +
            '                                        </a>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>';


        html += code;
    }
    document.getElementById(name).innerHTML = html;
}

function DrawAwardList(name) {
    var html = "";
    for (var p of AwardData) {

        var code = '<div class=" publication">' +
            '                            <div class="text-center ">' +
            '                            <h1><strong>🏆 ' + p["Title"] + '</strong>          ' + p["Date"] + '</h1>' +
            '                            <p></p>' +
            '                            </div>' +

            '                        </div>' +
            '                            <hr/>';

        html += code;
    }
    console.log(AwardData);
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