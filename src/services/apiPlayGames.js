export async function apiPlayGamesCategory(category) {
    return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": "7059c4325dmsh1023266292e69dfp1d677bjsnc27dfd3b8952"
        }
    }).then((response) => (
        response.ok
        ? response.json()
        : Promise.reject(new Error('Api error'))
    ));
}
