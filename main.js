// const menuToggle = document.querySelector('.toggle');
// const showcase = document.querySelector('.showcase');

// menuToggle.addEventListener('click', () => {
//   menuToggle.classList.toggle('active');
//   showcase.classList.toggle('active');
// })



document.querySelector('button').addEventListener('click', getPics)

function getPics(){
    let pics = document.querySelector('input').value
    fetch ("https://api.nasa.gov/planetary/apod?api_key=yCSxyJA1zQfPvQv3ZNOBy3r1jWhw1riSTfF71Z38")
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.date
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.copyright
        document.querySelector('p').hidden = true
    })
    .catch(err =>{
        console.log(`error ${err}`)
});
}