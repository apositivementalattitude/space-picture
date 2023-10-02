// const menuToggle = document.querySelector('.toggle');
// const showcase = document.querySelector('.showcase');

// menuToggle.addEventListener('click', () => {
//   menuToggle.classList.toggle('active');
//   showcase.classList.toggle('active');
// })


document.querySelector('button').addEventListener('click', function() {
    getPics(true);
    // Make the button disappear
    document.querySelector('button').style.display = 'none';
});

function getPics(toggle) {
    let pics = document.querySelector('input').value;
    fetch("https://api.nasa.gov/planetary/apod?api_key=yCSxyJA1zQfPvQv3ZNOBy3r1jWhw1riSTfF71Z38")
        .then(res => res.json())
        .then(data => {
            //Grab data from the api
            console.log(data);
            document.querySelector('h2').innerText = data.date;
            document.querySelector('img').src = data.hdurl;
            document.querySelector('h3').innerText = data.copyright;
            document.querySelector('p').hidden = true;

            // Toggle styles based on the 'toggle' parameter
            if (toggle) {
                document.querySelector('h2').style.fontSize = '1em';
                document.querySelector('h3').style.fontSize = '1em';
                document.querySelector('p').style.fontSize = '1em';
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}