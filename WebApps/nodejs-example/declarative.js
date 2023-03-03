const book = {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    rating: 4
};

const rate = (book, rating) => {
    return { ...book, rating }
};

let changedBook = rate(book, 2)
console.log(changedBook);
console.log(book);

const rate2 = (book, rating) => {
    book.rating = rating;
    return book;
};

const book1 = rate2(book, 2)
console.log(book);
console.log(book1);
console.log(book1 == book);

const users = ["John", "Jack", "Michael", "Tom", "Nicholas"];

const usersLowerCase = users.map(user => { return user.toLowerCase() });

function mapToLowerCase(input = []) {
    const result = []
    for (let i = 0; i < input.length; i++) {
        const item = input[i].toLowerCase();
        result.push(item);
    }

    return result;
}

const usersToLowerCase1 = mapToLowerCase(users);
const usersWhoseNameStartWithJ = users.filter(user => {
    return user.startsWith("J")
})

console.log(users);
console.log(usersToLowerCase1);
console.log(usersLowerCase);
console.log(usersWhoseNameStartWithJ);

const countdown = (value) => {
    console.log(value);
    if (value > 0) {
        countdown(value - 1);
    }
}

countdown(10);

const countdownIterative = (value) => {
    for (let i = value; i >= 0; i--) {
        console.log(i);
    }
}

countdownIterative(10);

const multipleWithAddition = (a, b) => {
    let sum = 0;
    for (let i = 0; i < b; i++) {
        sum += a;
    }

    return sum;
}

console.log(multipleWithAddition(3, 4))

const multipleWithAdditionRec = (a, b, sum = 0) => {
    if (b > 0) {
        return multipleWithAdditionRec(a, b-1, sum + a)
    }

    return sum;
}

console.log(multipleWithAdditionRec(3, 4))
