module.exports = function generateIntern (answers) {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ answers.name }</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${ answers.role }</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ answers.id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ answers.email }">${ answers.email }</a></li>
            <li class="list-group-item">School: ${ answers.school }</li>
        </ul>
    </div>
</div>
    `

}
