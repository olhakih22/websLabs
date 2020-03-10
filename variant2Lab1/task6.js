exports.sortClass = (classRoom) => {
    let mass = [];
    classRoom.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return classRoom;
};