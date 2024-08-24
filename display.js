const groupData = JSON.parse(sessionStorage.getItem('groupData'));


prefixes = [
    "Amber", "Aqua", "Azure", "Beige", "Black",
    "Blush", "Bronze", "Brown", "Burgundy", "Carmine",
    "Celeste", "Cerulean", "Charcoal", "Chartreuse", "Cobalt",
    "Copper", "Coral", "Crimson", "Cyan", "Denim",
    "Emerald", "Fawn", "Fuchsia", "Gold", "Gray",
    "Green", "Harlequin", "Indigo", "Ivory", "Jade",
    "Lavender", "Lemon", "Lilac", "Magenta", "Maroon",
    "Mauve", "Mint", "Navy", "Olive", "Orange",
    "Peach", "Periwinkle", "Pink", "Plum", "Purple",
    "Red", "Rose", "Ruby", "Salmon", "Silver"
  ]
suffixes = [
    "Lions", "Tigers", "Bears", "Elephants", "Wolves",
    "Giraffes", "Kangaroos", "Zebras", "Rabbits", "Foxes",
    "Cheetahs", "Leopards", "Horses", "Deer", "Bats",
    "Dolphins", "Whales", "Sharks", "Eagles", "Hawks",
    "Owls", "Pigeons", "Penguins", "Flamingos", "Ducks",
    "Geese", "Swans", "Otters", "Beavers", "Squirrels",
    "Chipmunks", "Rats", "Mice", "Frogs", "Toads",
    "Snakes", "Lizards", "Turtles", "Crocodiles", "Alligators",
    "Spiders", "Crabs", "Lobsters", "Shrimps", "Ants",
    "Bees", "Wasps", "Butterflies", "Moths", "Mosquitoes"
  ];

const createAriaLabel = () => {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    prefixes.splice(prefixes.indexOf(prefix), 1);
    suffixes.splice(suffixes.indexOf(suffix), 1);   
    return `${prefix} ${suffix}`;
};

function createList(id) {
    let list = document.createElement('ul');
    list.id = id.toString();
    list.classList.add('inside-container');

    list.setAttribute('aria-label', createAriaLabel());
    list.style.fontFamily = 'Gontserrat';

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
