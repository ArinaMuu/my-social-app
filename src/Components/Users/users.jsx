import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/paginator";

let Users = ({totalItemsCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>

    return (
        <div>
            {props.users?.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img
                            src={u.photos.small != null ? u.photos.small : "https://ds62-izhevsk-r18.gosweb.gosuslugi.ru/netcat_files/21/10/622990_17.jpg"}
                            alt='ava' width='50px'/>
                    </NavLink>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                    {u.name}
                    {u.status}
                </div>
            </div>)
            }
        </div>
    );
}
export default Users