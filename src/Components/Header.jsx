

const Header = () => {
    return (
    <div>
        <div class="navbar bg-base-100">
        <div class="navbar-start">
        <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <h1 class="text-3xl font-bold">Recipe Calories</h1>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
        <li><a class="text-xl">Home</a></li>
        <li><a class="text-xl">Recipes</a></li>
        <li><a class="text-xl">About</a></li>
        <li><a class="text-xl">Search</a></li>
    </ul>
    </div>
    <div class="navbar-end">
    <label class="input input-bordered flex items-center gap-2 mr-3">
   <input type="text" class="grow" placeholder="Search" />
   <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      fill-rule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clip-rule="evenodd" />
   </svg>
   </label>
   <div>
   <a href=""><i class="fa-regular fa-user text-2xl p-3 border border-gray-300 rounded-full"></i></a>
   </div>
    </div>
    </div>
    </div>
    );
};

export default Header;