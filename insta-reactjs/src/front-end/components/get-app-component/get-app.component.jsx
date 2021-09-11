import apple from '../../assets/apple-link.png';
import google from '../../assets/google-link.png';

import './get-app.component.scss';

export const GetAppComponent = () => (
    <div className="get-app-box">
        <p>Get the app</p>
        <div className="links">
            <img src={apple} alt="Link to Apple" title="Link to Apple" />
            <img src={google} alt="Link to Google" title="Link to Google" />
        </div>
    </div>
);