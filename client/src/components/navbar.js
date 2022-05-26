import React from 'react';
import {Link, useHistory } from "react-router-dom";

function NavBar() {
  let menuItems = [
    {
      name: "Products",
      route: "product",
      id:1,
    },
    {
      name: "Sales Person",
      route: "salesperson",
      id:2
    },
    {
      name: "Customers",
      route: "customers",
      id:3
    },
    {
      name:"Sales",
      route:"sales",
      id:4
    }
  ];

  let nav = menuItems.map((item) => {
    return (
      <li key={item.id}>
				<a
					href={item.route}
					className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-slate-50 md:hover:bg-transparent md:border-0 md:hover:text-slate-200 md:p-0 dark:text-white md:dark:hover:text- dark:hover:bg-slate-200 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
				>
					<Link to={`/${item.route}`}>{item.name}</Link>
				</a>
			</li>
    )
  })

    return (
      <div className=" sm:px-4 py-2.5 rounded bg-stone-800">
          <div className='flex-1 flex'>
            <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
          <span className="text-xl flex-1 flex px-2 font-semibold text-white">BeSpoked</span>
          <div
					className="hidden justify-center items-center w-full md:flex md:order-1"
					id="mobile-menu-2"
				>
					<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl font-semibold">
						{nav}
					</ul>
				</div>
      </div>
      </div>
    )
}

export default NavBar;
