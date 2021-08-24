import { updateStories } from './stories.actions';
import { httpGet } from '../../utils/http.utils';

export const fetchStories = () => {
    return dispatch => {
        httpGet('http://localhost:3200/getStories').then(response => {
            if (response) {
                if (response && response.data && response.data.stories)
                    dispatch(updateStories(response.data.stories));
            }
        });
    }
}