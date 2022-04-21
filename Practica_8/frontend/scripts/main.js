let resultParrafo = document.querySelector('#result');

const URI = process.env.URI || 'http://localhost:3000';

const handlePost = () => {
    fetch(URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Juan',
            lastname: 'Perez',
            age: '20'
        })
    })
        .then(data => {
            console.log(data);
            result = data
        })
        .catch(err => console.log(err));
}

const handleGet = () => {
    fetch(URI)
        .then(res => res.json())
        .then(response => {
            resultParrafo.textContent = `Consulta #${response.value}`;
        })
        .catch(err => console.error(err));
}