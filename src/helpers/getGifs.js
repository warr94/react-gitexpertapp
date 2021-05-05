export const handleGetGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=piQucEbRcn0EoS6qPBlg00R6j02SCAG6&q=${encodeURI(category)}&limit=10`

    const response = await fetch(url)
    const { data } = await response.json()

    const jsonGifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })

    return jsonGifs;

}