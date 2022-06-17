const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3fc0aed20656d1ec6a9199b158d4cfed',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;