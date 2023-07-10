import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search)

  // console.log(searchQuery);
  //using debouncing inside useEffect so that if time difference between two keystrokes is less than
  //200ms it shouldn't make an api call and we need a cleanup function also to clear the timer for every reconciliation.

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions()
      }
      
    }, 200);
//cleaning up the timer

    return () => {
      clearInterval(timer);
    }

  }, [searchQuery])

  const getSearchSuggestions = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }));
  }

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg items-center">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer hover:bg-gray-100"
          alt="menu"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png"
        />
        <img
          className="h-6 ml-3"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col col-span-10 px-16">
        <div className="flex items-start">
        <input
          className="border border-gray-400 w-8/12 p-2 px-5 rounded-l-full h-11"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 bg-gray-200 px-5 py-2 rounded-r-full h-11">
          🔍
        </button>
        <div>
          <img className="p-2 m-2 h-10 w-10 hover:bg-gray-200" alt="mic" src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" />
        </div>
        </div>
        
        {showSuggestions && <div className="absolute bg-white py-1 px-2 w-[32rem] border border-gray-100 rounded-lg shadow-lg">
          <ul>
            {suggestions.map((s) =><li key={s} className="py-2 px-3 cursor-pointer shadow-sm hover:bg-gray-100">🔍{s}</li>)}
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
        />
      </div>
    </div>
  );
};

export default Header;
