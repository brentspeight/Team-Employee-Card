module.exports = function generateManager(answers) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ answers.name }</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ answers.id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ answers.email }">{{ email }}</a></li>
            <li class="list-group-item">Office number: ${ answers.officeNumber }</li>
        </ul>
    </div>
</div>
    `
}

// generateManager(managerCard[0])