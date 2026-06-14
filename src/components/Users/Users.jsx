import React from 'react';
import {Skeleton} from '../Skeletons/Skeletons';
import {User} from './User';
import Search from "../Icons/Search";
export const Users = ({items, isLoading, searchValue, onChangeValue}) => {
return (
<>
<div className="search">
<Search/>
<input type="text" placeholder="Найти пользователя..." value={searchValue} onChange={onChangeValue}/>
</div>
{isLoading ? (
<div className="skeleton-list">
<Skeleton/>
<Skeleton/>
<Skeleton/>
</div>
) : (
<ul className="users-list">
    {
        items
        .filter(obj => {
            const fullName = (obj.first_name + obj.last_name).toLowerCase();
            if (fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            }
            })
        .map((users) => (<User first_name={users.first_name} last_name={users.last_name} email={users.email} id={users.id} avatar={users.avatar} />))
        }

</ul>
)}
<button className="send-invite-btn">Отправить приглашение</button>
</>
);
};

export default Users;