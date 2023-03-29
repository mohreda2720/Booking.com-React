/* eslint-disable no-unused-vars */
import "./header.css"
import { render } from 'react-dom';
import Hello from './Hello';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

const Header = () => {
return(
<div>

<div className="headerSearch">
<div className="headerSearchItem">

<FontAwesomeIcon icon="faBed" className="headerIcon" />
<input>

</input>
</div>

</div>

</div>

)

}
export default Header
