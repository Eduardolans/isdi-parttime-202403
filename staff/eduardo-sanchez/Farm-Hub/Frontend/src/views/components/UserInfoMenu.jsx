import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfoMenu = () => {

    const navigate = useNavigate();

    const handleMyAccountClick = () => {
        navigate(`/myaccount`); // este userId tiene q estar disponible 
    };

    const handleMyAdsClick = () => {
        navigate(`/myads`); // este userId tiene q estar disponible 
    };

    return (
        <div className="dropdown-menu">
            <ul>
                <li onClick={handleMyAccountClick}>My Account</li>
                <li onClick={handleMyAdsClick}>My Ads</li>
                <li>Your Comments</li>
            </ul>
        </div>
    );
};

export default UserInfoMenu;

// import { Link } from "react-router-dom"
// /*
// Mis datos -> /my-account
// Mis anuncios -> /my-ads
// Mis comentarios -> /my-comments
// (Mis favoritos) -> /my-favorites
// */
// export const UserInfoMenu = () => {
//     return (
//         <ul>
//             <li><Link to="/my-account/">Your account </Link></li>
//             <li><Link to="/my-ads/">My ads </Link></li>
//             <li><Link to="/my-comments/">My comments</Link></li>
//             {/* <li>Your favorites</li> */}
//         </ul>
//     )
// }