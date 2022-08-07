import React from 'react';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Link, NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import {links} from '../data/dummy';

function Sidebar(props) {

    const activeMenu = true;

    return (
        <div className={"ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"}>
            <div className="flex justify-between items-center">
                <Link
                    to={`/`}
                    onClick={() => {}}
                    className={"items-center"}
                >
                    <SiShopware/>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
