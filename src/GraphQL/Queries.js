import { gql } from "@apollo/client";

export const LOAD_ARTISTS = gql `
    query Artists($searchedArtist: String!)
    { 
        queryArtists(byName:$searchedArtist) {
            name
            id
            image
            albums {
                id
                name
                image
            }
        }
    }
`