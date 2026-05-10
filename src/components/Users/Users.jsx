import React from 'react';
import {Skeleton} from '../Skeletons/Skeletons';
import {User} from './User';
import Search from "../Icons/Search";
export const Users = ({items, isLoading}) => {
return (
<>
<div className="search">
<Search/>
<input type="text" placeholder="Найти пользователя..."/>
</div>
{isLoading ? (
<div className="skeleton-list">
<Skeleton/>
<Skeleton/>
<Skeleton/>
</div>
) : (
<ul className="users-list">
<User/>
</ul>
)}
<button className="send-invite-btn">Отправить приглашение</button>
</>
);
};