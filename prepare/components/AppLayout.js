import { useState } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';


const AppLayout = ({children})=>{
    const second= 1;
    const [first, setfirst] = useState(second)
    return (
        <div>
            <div>
                <Link href="/nodeBird"><a>노드버드</a></Link>
            </div>
            <div>
                <Link href="/profile"><a>프로필</a></Link>
            </div>
            <div>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            <div>공통메뉴</div>
            <h3>{children}</h3>
        </div>

    )
}

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
};

export default AppLayout;