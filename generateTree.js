
function generateTree(characters) {

    function getCharacter(name) {
        return characters.filter(function (d) {
            return d["characterName"] === name;
        })[0];
    };

    function getChildren(d) {
        if (d.parentOf) {
            return {
                "name": d.characterName,
                "house": d.houseName,
                "image": d.characterImageThumb,
                "children": d.parentOf.map(function (c) {
                    return getChildren(getCharacter(c))
                })
            };
        } else {
            return {
                "name": d.characterName,
                "house": d.houseName,
                "image": d.characterImageThumb
            };
        };
    };

    return characters.filter(function (d) {
        if (!d.parents) { 
            return d; 
        };
    }).map(getChildren);
}




