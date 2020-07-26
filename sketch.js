/*
function ready() {
    const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
        basePath: 'libraries/spacekit/src',
        assetPath: 'libraries/spacekit/src/assets',
    });

    // Create a skybox using NASA TYCHO artwork.
    const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

    $("#home-modal-submit").css("border" "3px solid red");

    $(function () {
        $("#home-modal-submit").click(function () {
            $("#home-modal").modal("hide");
        });
    });

};
*/

// Event listener that waits for loaded DOM tree
// document.addEventListener("DOMContentLoaded", ready);

$(document).ready(function(e) {
    // your code here

    const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
        basePath: 'libraries/spacekit/src',
        assetPath: 'libraries/spacekit/src/assets',
    });

    // Create a skybox using NASA TYCHO artwork.
    const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

    $(function () {
        $('#home-modal-submit').click(function () {
            $('#home-modal').prop('hidden', true);

        });
    });

});
