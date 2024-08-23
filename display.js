const groupData = JSON.parse(sessionStorage.getItem('groupData'));

function createList(id) {
    let list = document.createElement('ul');
    list.id = id.toString();
    list.classList.add('inside-container');
    document.getElementById('outside-container').append(list);
}

console.log(groupData[1]);

if (groupData) {
    for (let i = 0; i < groupData[1]; i++) {
        createList(i);
    }

    names = groupData[0];
    names.sort(() => Math.random() - 0.5);

    for (i in groupData[0]) {
        list = document.getElementById(i % groupData[1]);
        let listItem = document.createElement('li');
        listItem.textContent = groupData[0][i];
        list.append(listItem);
    }
}
