const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-05-25',
    friendsCount: 500,
    postsCount: 100,
    city: 'New York'
};

for (let key in userProfile) {
    console.log(`${key}: ${userProfile[key]}`);
}

if (userProfile.friendsCount > 1000) {
    console.log('Этот пользователь очень популярен!');
} else if (userProfile.friendsCount > 500) {
    console.log('Этот пользователь популярен!');
} else {
    console.log('Этот пользователь не особо популярен');
}