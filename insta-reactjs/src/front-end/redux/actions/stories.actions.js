import { storiesTypes } from "../types/stories.types"

export const updateStories = payload => {
    return {
        payload: payload,
        type: storiesTypes.updateStories
    }
}