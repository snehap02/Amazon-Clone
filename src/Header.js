import React, { useState } from "react";
import { useEffect } from "react";
import "./Header.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //🟡 modal
  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-bg");
  };
  const closeModal = () => {
    // const mod = document.querySelector('.mod');
    setIsModalOpen(false);
    document.body.classList.remove("modal-bg");
    // mod.classList.add('hidden');
  };
  const handleOutsideClick = (e) => {
    const mod = document.querySelector(".mod");
    const search = document.querySelector(".header-search");
    // const modaal = document.querySelector('.modaal');
    if (mod && !e.target.closest("#address") && !mod.contains(e.target)) {
      closeModal();
    }
    if (search && !e.target.closest(".header-search")) {
      searchboxDeselected();
    }
  };

  //🟡searchbar
  const searchboxSelected = () => {
    const search = document.querySelector(".header-search");
    setIsSearchClicked(true);
    search.classList.add(
      "border-4",
      "border-amber-400",
      "bg-amber-400",
      "rounded-md"
    );
  };
  const searchboxDeselected = () => {
    const search = document.querySelector(".header-search");
    setIsSearchClicked(false);
    search.classList.remove(
      "border-4",
      "border-amber-400",
      "bg-amber-400",
      "rounded-md"
    );
  };

  //🟡Language
  const showLanguage = () => {
    const langHover = document.querySelector(".language-hover");
    setIsLangOpen(true);
    langHover.classList.remove("hidden");
  };
  const hideLanguage = () => {
    setIsLangOpen(false);
    const langHover = document.querySelector(".language-hover");
    langHover.classList.add("hidden");
  };

  return (
    <>
      <div className="header flex justify-between items-center h-[4rem] w-full bg-[#131921] px-3 z-[999] top-0 sticky">
        {/* 🟡 header-logo */}
        <div className="header_logo flex text-white gap-[0.2rem] hover:border hover:border-white px-1 py-3 cursor-pointer">
          <img src="./assets/logo.png" alt="logo" className="w-24" />
          <span className="text-lg -mt-1 font-semibold">Clone.in</span>
        </div>

        {/* 🟡header-location */}
        <div className="address-section relative">
          <button
            className="location text-white flex justify-center items-center gap-1 hover:border hover:border-white px-1 py-2 cursor-pointer"
            id="address"
            onClick={openModal}
          >
            <div className="mt-3 text-lg">
              <PlaceOutlinedIcon fontSize="small" className="-mt-[1px]" />
            </div>
            <div className="leading-[0.95rem] flex flex-col items-start">
              <h2 className="text-xs text-neutral-400 font-medium font-EmberBold">
                Deliver to User
              </h2>
              <h2 className="text-[14px] font-bold font-EmberBold">
                City XXXXXX
              </h2>
            </div>
          </button>
          {isModalOpen && (
            <div className="mod fixed left-0 right-0 top-[19rem] flex justify-center place-items-center z-[1000] 500:mx-64 lg:mx-96 xl:mx-[35.9rem]">
              <div className="mod-bg">
                <div className="bg-white text-black h-[32rem] w-[24rem] -mt-44 rounded-lg z-[1002]">
                  <div className="heading h-14 font-EmberBold flex items-center bg-neutral-300 rounded-tl-lg rounded-tr-lg px-6 border-b border-b-neutral-500">
                    <h2>Choose Your Location</h2>
                  </div>
                  <div className="other-details px-6 py-4">
                    <h5 className="text-xs text-neutral-700">
                      Select a delivery location to see product availability and
                      delivery options
                    </h5>
                    <div className="address mt-4" id="locate">
                      <div className="bg-neutral-200 border border-neutral-600 rounded-md px-3 py-2 cursor-pointer">
                        <h2>
                          <span className="font-EmberBold">User</span> 15a, Hare
                          Street, Kolkata West Bengal, 700001
                        </h2>
                      </div>
                      <div className="bg-sky-100 ring-2 ring-sky-900 hover:bg-neutral-200 border border-neutral-600 rounded-md px-3 py-2 cursor-pointer">
                        <h2>
                          <span className="font-EmberBold">User</span> 56 Sutarr
                          Chawl, 1st Flr, Kalbadevi Mumbai, Maharastra, 400002
                        </h2>
                        <h2 className="mt-3 text-neutral-700 font-EmberBold">
                          Default address
                        </h2>
                      </div>
                      <div className="bg-neutral-200 border border-neutral-600 rounded-md px-3 py-2 cursor-pointer mt-[2px]">
                        <h2>
                          <span className="font-EmberBold">User</span> Shop No
                          2718, Onkar Nagar A, Gali No 202, Nr M N Convent
                          School, Tri Nagar, Delhi, 110035
                        </h2>
                      </div>
                      <div className="mt-3">
                        <a
                          href="#"
                          className="text-sky-600 font-medium hover:text-orange-600 hover:underline-offset-1 hover:underline"
                        >
                          Add an address or pick-up point
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center items-center before:contents-[''] before:w-10 before:h-[1px] before:bg-black after:contents-[''] after:w-10 after:h-[1px] after:bg-black mt-2 text-sm">
                      <h2 className="px-2">or enter an Indian pincode</h2>
                    </div>
                    <div className="flex justify-between items-center gap-2 mt-3">
                      <input
                        type="text"
                        className="outline-none focus:ring-2 focus:ring-blue-400 border-2 rounded-md border-neutral-500 w-full py-1"
                        id="pincodeBox"
                      />
                      <button
                        type="submit"
                        className="text-sm font-medium px-9 py-[6px] text-neutral-800 hover:bg-neutral-100 border-2 border-neutral-300 rounded-md shadow-md"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div onClick={handleOutsideClick} className="modal-overlay"></div>
          )}
        </div>

        {/* 🟡header-search */}
        <button className="header-search flex" onClick={searchboxSelected}>
          <div className="search-select">
            <select
              name="category"
              id="cat"
              class="w-10 py-[0.6rem] border-t border-t-neutral-400 outline-yellow-600 bg-zinc-300 hover:bg-zinc-400 rounded-tl-md rounded-bl-md border-r-2 border-neutral-400 text-sm cursor-pointer"
            >
              <option value="1" class="bg-white font-EmberBold">
                All Categories
              </option>
              <option value="2" class="bg-white font-EmberBold">
                Alexa Skills
              </option>
              <option value="3" class="bg-white font-EmberBold">
                Amazon Devices
              </option>
              <option value="4" class="bg-white font-EmberBold">
                Amazon Fashion
              </option>
              <option value="5" class="bg-white font-EmberBold">
                Amazon Pharmacy
              </option>
              <option value="6" class="bg-white font-EmberBold">
                Appliances
              </option>
              <option value="7" class="bg-white font-EmberBold">
                Apps & Games
              </option>
              <option value="8" class="bg-white font-EmberBold">
                Audible Audiobooks
              </option>
              <option value="9" class="bg-white font-EmberBold">
                Baby
              </option>
              <option value="10" class="bg-white font-EmberBold">
                Beauty
              </option>
              <option value="11" class="bg-white font-EmberBold">
                Books
              </option>
              <option value="12" class="bg-white font-EmberBold">
                Car & Motorbike
              </option>
              <option value="13" class="bg-white font-EmberBold">
                Clothing & Accessories
              </option>
              <option value="14" class="bg-white font-EmberBold">
                Collectibles
              </option>
              <option value="15" class="bg-white font-EmberBold">
                Computers & Accessories
              </option>
              <option value="16" class="bg-white font-EmberBold">
                Electronics
              </option>
              <option value="17" class="bg-white font-EmberBold">
                Furniture
              </option>
              <option value="18" class="bg-white font-EmberBold">
                Garden & Outdoors
              </option>
              <option value="19" class="bg-white font-EmberBold">
                Gift Cards
              </option>
              <option value="20" class="bg-white font-EmberBold">
                Grocery & Gourmet Foods
              </option>
              <option value="21" class="bg-white font-EmberBold">
                Health & Personal Care
              </option>
              <option value="22" class="bg-white font-EmberBold">
                Home & Kitchen
              </option>
              <option value="23" class="bg-white font-EmberBold">
                Industrial & Scientific
              </option>
              <option value="24" class="bg-white font-EmberBold">
                Jewellery
              </option>
              <option value="25" class="bg-white font-EmberBold">
                Kindle Store
              </option>
              <option value="26" class="bg-white font-EmberBold">
                Luggage & Bag
              </option>
              <option value="27" class="bg-white font-EmberBold">
                Luxury Beauty
              </option>
              <option value="28" class="bg-white font-EmberBold">
                Movies & TV Shows
              </option>
              <option value="29" class="bg-white font-EmberBold">
                Music/option
              </option>
              <option value="30" class="bg-white font-EmberBold">
                Musical Instruments
              </option>
              <option value="31" class="bg-white font-EmberBold">
                Office Products
              </option>
              <option value="32" class="bg-white font-EmberBold">
                Pet Supplies
              </option>
              <option value="33" class="bg-white font-EmberBold">
                Prime Video
              </option>
              <option value="34" class="bg-white font-EmberBold">
                Shoes & Handbags
              </option>
              <option value="35" class="bg-white font-EmberBold">
                Software
              </option>
              <option value="36" class="bg-white font-EmberBold">
                Sports, Fitness & Outdoors
              </option>
              <option value="37" class="bg-white font-EmberBold">
                Subscribe & Save
              </option>
              <option value="38" class="bg-white font-EmberBold">
                Tools & Home Improvement
              </option>
              <option value="39" class="bg-white font-EmberBold">
                Toys & Games
              </option>
              <option value="40" class="bg-white font-EmberBold">
                Under ₹500
              </option>
              <option value="41" class="bg-white font-EmberBold">
                Video Games
              </option>
              <option value="42" class="bg-white font-EmberBold">
                Watches
              </option>
            </select>
          </div>
          <div className="input-items w-[100%] xl:w-[745px] flex bg-white justify-between items-center">
            <input
              type="text"
              name=""
              id="input"
              className="w-[100%] h-10 px-3 placeholder-slate-800 outline-none"
              placeholder="Search AmazonClone.in"
              autocomplete="off"
            />
            <button className="lens-icon px-2 -mt-[2px]">
              <CenterFocusStrongOutlinedIcon
                color="action"
                className="cursor-pointer"
              />
            </button>
          </div>
          <div className="search-icon bg-[#F3A847] hover:bg-[#ee9a2c] text-2xl py-[0.2rem] px-3 border border-yellow-500 rounded-tr-md rounded-br-md cursor-pointer">
            <button>
              <SearchOutlinedIcon className="-mt-[7px]" sx={{ fontSize: 28 }} />
            </button>
          </div>
        </button>

        {/* 🟡language */}
        <div
          className="language flex flex-col cursor-pointer"
          onMouseOver={showLanguage}
        >
          <div className="language-items gap-1 flex justify-center items-center hover:border hover:border-white px-1 py-2 relative">
            <div className="flag">
              <img src="./assets/india.png" alt="" className="w-5" />
            </div>
            <h2 class="text-sm text-white">EN</h2>
            <ArrowDropDownRoundedIcon className="text-white mt-2 -ml-2" />
          </div>

          <div
            className="language-hover h-[440px] w-[275px] fixed mt-[42px] -ml-2 bg-white rounded-md px-4 hidden z-[999]"
            onMouseOut={hideLanguage}
          >
            <div className="blank w-4 h-4 absolute rotate-45 ml-[38px] mt-[-0.25rem] bg-white"></div>
            <div className="lang-inner">
              <div className="eng flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  English - EN
                </h2>
              </div>
              <div className="lang-line1 bg-neutral-300 h-[0.4px] w-full mt-4"></div>
              <div className="hindi flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  हिन्दी - HI
                </h2>
              </div>
              <div className="tamil flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  தமிழ் - TA
                </h2>
              </div>
              <div className="telugu flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  తెలుగు - TE
                </h2>
              </div>
              <div className="kannad flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  ಕನ್ನಡ - KN
                </h2>
              </div>
              <div className="malayalam flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  മലയാളം - ML
                </h2>
              </div>
              <div className="bangla flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  বাংলা - BN
                </h2>
              </div>
              <div className="marathi flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  मराठी - MR
                </h2>
              </div>
              <div className="mt-3">
                <a
                  href=""
                  className="text-sm font-Work-Sans font-medium ml-5 text-sky-600 hover:underline hover:underline-offset-1"
                >
                  Learn more
                </a>
              </div>
              <div className="lang-line1 bg-neutral-300 h-[0.4px] w-full mt-4"></div>
              <div className="imgAndText flex gap-2 items-center mt-3">
                <img src="./assets/india.png" alt="flag" class="w-4" />
                <h2 className="text-xs font-Work-Sans">
                  You are shopping on AmazonClone.in
                </h2>
              </div>
              <div className="countryOrRegion mt-3">
                <a
                  href="#"
                  className="font-Work-Sans text-sm ml-5 font-medium text-sky-600 hover:underline hover:underline-offset-1"
                >
                  Change country/region.
                </a>
              </div>
            </div>
          </div>

          {/* {isLangOpen && (
            <div className="lang-overlay" onMouseOver={handleOutsideClick}></div>
          )} */}
        </div>

        {/* 🟡language */}
        <div className="account">
          
        </div>




        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Header;
