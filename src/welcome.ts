document.addEventListener('DOMContentLoaded', function() {
    Welcome.main();
});

class Welcome {

    public static main() {

        let welcomeView = document.getElementById('welcomeView')!;
        let beginButton = document.getElementById('beginButton')!;
        
        beginButton.addEventListener('click', () => {
            welcomeView.hidden = true;
            Game.main();
        });
    }

}