const groupData = JSON.parse(sessionStorage.getItem('groupData'));

if (groupData) {
    for (let i of groupData[1]) {
        console.log(groupData[0][i]);
    }
}