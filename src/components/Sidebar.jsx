import React from 'react';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Link, NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import {links} from '../data/dummy';
import {useStateContext} from "../contexts/ContextProvider";


function Sidebar(props) {

    const {activeMenu, setActiveMenu, screenSize} = useStateContext();
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-sky-400 text-md m-2';

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900){
            setActiveMenu(false)
        }
    }

    return (
        <div className={"ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 "}>

            {
                activeMenu && (
                    <>
                        {/* Logo and Cancel Button */}
                        <div className="flex justify-between items-center">
                            <Link
                                to={`/`}
                                onClick={handleCloseSideBar}
                                className={"items-center flex gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight"}
                            >
                                <SiShopware/> <span>Shoppy</span>
                            </Link>

                            <TooltipComponent content={"Menu"}>
                                <button
                                    className={"mt-4 text-xl font-bold p-3 hover:bg-light-gray block md:hidden"}
                                    onClick={() => {setActiveMenu(false)}}
                                >
                                    <MdOutlineCancel  />
                                </button>
                            </TooltipComponent>
                        </div>


                        <div className="mt-10">
                            {
                                links.map((item, index) => (
                                    <div key={item.title}>
                                        <p className="text-gray-400 uppercase mt-4 m-3">
                                            {item.title}
                                        </p>

                                        {
                                            item.links.map((link, index) => (
                                                <NavLink
                                                    to={`/${link.name}`}
                                                    key={link.name}
                                                    onClick={handleCloseSideBar}
                                                    className={({isActive}) => isActive ? activeLink : normalLink}
                                                >
                                                    {link.icon}
                                                    <span className="capitalize">
                                            {link.name}
                                        </span>
                                                </NavLink>
                                            ))
                                        }

                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }









        </div>
    );
}

export default Sidebar;
