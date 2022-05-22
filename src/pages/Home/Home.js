import { withRouter, Link } from 'react-router-dom';
import EnginePrincipal from '../../Components/Engine'

function Home () {
    return (
        <EnginePrincipal/>
    );
}

export default withRouter(Home)