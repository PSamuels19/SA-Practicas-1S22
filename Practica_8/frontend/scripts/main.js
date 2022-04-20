let resultParrafo = document.querySelector('#result');

const handlePost = () => {
    fetch('http://localhost:3000', {
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
    fetch('http://localhost:3000')
        .then(res => res.json())
        .then(response => {
            resultParrafo.textContent = `Consulta #${response.value}`;
        })
        .catch(err => console.error(err));
}