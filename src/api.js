import axios from 'axios';

const searchImages = async () => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Client-ID 9G4z-CP2jer--bohCSfqB59-4v7V66phXR7VS298Pa0'
        },
        params: {
            query: "cars",
            client_id: ""
        }
    })
    console.log(response);
    return response;
};


export default searchImages;