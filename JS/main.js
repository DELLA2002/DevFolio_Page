document.body.addEventListener('contextmenu' , (e) => {
    e.preventDefault();
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault(); // Prevent the default action (opening developer tools)
        console.log('F12 key was pressed!');
        // Add your custom logic here
    }
})