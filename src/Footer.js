import React from "react";

function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div
        className="footer-one w-full h-12 bg-[#3b4959] flex justify-center items-center hover:bg-[#485769] cursor-pointer"
        onClick={backToTop}
      >
        <button className="font-semibold text-sm text-white tracking-wider cursor-pointer">
          Back to top
        </button>
      </div>
      <div className="footer-two w-full py-12 bg-[#232F3E] flex justify-center gap-20 text-white">
        <div className="block1">
          <div className="head">
            <h1 className="font-semibold">Get to Know Us</h1>
          </div>
          <div className="topic mt-3 text-sm font-light flex flex-col">
            <a href="#" className="hover:underline hover:underline-offset-1">
              About Us
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Careers
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Press Release
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Amazon Science
            </a>
          </div>
        </div>
        <div className="block2">
          <div className="head">
            <h1 className="font-semibold">Connect with Us</h1>
          </div>
          <div className="topic mt-3 text-sm font-light flex flex-col">
            <a href="#" className="hover:underline hover:underline-offset-1">
              Facebook
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Twitter
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Instagram
            </a>
          </div>
        </div>
        <div className="block3">
          <div className="head">
            <h1 className="font-semibold">Make Money with Us</h1>
          </div>
          <div className="topic mt-3 text-sm font-light flex flex-col">
            <a href="#" className="hover:underline hover:underline-offset-1">
              Sell on Amazon
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Sell under Amazon Accelerator
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Protect and Build Your Brand
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Amazon Global Selling
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Become an Affiliate
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Fulfilment by Amazon
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Advertise Your Products
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Amazon Pay on Merchants
            </a>
          </div>
        </div>
        <div className="block4">
          <div className="head">
            <h1 className="font-semibold">let Us Help You</h1>
          </div>
          <div className="topic mt-3 text-sm font-light flex flex-col">
            <a href="#" className="hover:underline hover:underline-offset-1">
              COVID-19 and Amazon
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Your Account
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Returns Centre
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              100% Purchase Protection
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Amazon App Download
            </a>
            <a href="#" className="hover:underline hover:underline-offset-1">
              Help
            </a>
          </div>
        </div>
      </div>
      <div className="footer-three w-full bg-[#232F3E] flex flex-col gap-5 justify-center items-center border-t border-[#485769] py-10">
        <a href="#" className="logo flex text-white gap-[0.2rem]">
          <img src="./assets/logo.png" alt="logo" className="w-24" />
          <span className="font-semibold">Clone.in</span>
        </a>
        <div className="languages flex flex-col justify-center items-center gap-1">
          <div className="lang-one flex gap-3 text-sm text-white font-light">
            <a href="#" className="hover:underline hover:underline-offset-1">Australia</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Brazil</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Canada</a>
            <a href="#" className="hover:underline hover:underline-offset-1">China</a>
            <a href="#" className="hover:underline hover:underline-offset-1">France</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Germany</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Italy</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Japan</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Mexico</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Netherlanda</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Poland</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Singapore</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Spain</a>
            <a href="#" className="hover:underline hover:underline-offset-1">Turkey</a>
            <a href="#" className="hover:underline hover:underline-offset-1">United Arab Emirates</a>
          </div>
          <div className="lang-two flex gap-3 text-sm text-white font-light">
            <a href="#" className="hover:underline hover:underline-offset-1">United Kingdom</a>
            <a href="#" className="hover:underline hover:underline-offset-1">United States</a>
          </div>
        </div>
      </div>
      <div className="footer-four w-full bg-[#131A22] py-4 flex justify-center items-center text-white text-xs tracking-widest">
        AmazonClone Made with ❤️ in India
      </div>
    </div>
  );
}

export default Footer;
