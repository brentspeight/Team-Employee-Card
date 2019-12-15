module.exports = function generateEngineer(answers) {
    return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${ answers.name }</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${ answers.role }</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: id</li>
                <li class="list-group-item">Email: <a href="mailto:${ answers.email }">${ answers.email }</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${ answers.github }" target="_blank" rel="noopener noreferrer">${ answers.github }</a></li>
            </ul>
        </div>
    </div>`
    }