document.addEventListener('DOMContentLoaded', function () {
    Welcome.main();
});
var Welcome = (function () {
    function Welcome() {
    }
    Welcome.main = function () {
        var welcomeView = document.getElementById('welcomeView');
        var beginButton = document.getElementById('beginButton');
        beginButton.addEventListener('click', function () {
            welcomeView.hidden = true;
            Game.main();
        });
    };
    return Welcome;
}());
//# sourceMappingURL=welcome.js.map