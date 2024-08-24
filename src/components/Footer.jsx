import React from 'react';

const Footer = () => {
  return (
    <footer className="h-fit text-white relative">
      <div className="absolute z-50 w-full footer-background">
        <div className="h-[2px] bg-white w-11/12 mx-auto my-2"></div>
        <div className="flex flex-wrap justify-evenly items-center">
          <div className="flex flex-col items-center font-bold text-sm px-4 pb-4">
            Connect with us on:
            <div className="flex gap-2 items-center">
              <a href="https://codechefvitcc.vercel.app/" target="_blank" className="h-6 w-6">
                <img
                  className="h-6 w-6"
                  src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png"
                  alt="CodeChef VIT-C Site"
                />
              </a>
              <a href="https://www.linkedin.com/company/codechef-vit-chennai-chapter/about/?viewAsMember=true" target="_blank" className="h-6 w-6">
                <img
                  className="h-6 w-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://www.instagram.com/codechef.vitc/" className="h-6 w-6">
                <img
                  className="h-6 w-6"
                  src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720083181/instagram_mqplcc.png"
                  alt="Instagram"
                />
              </a>

              {/* Dividing line */}
              <div className="h-8 w-[2px] bg-white" />

              <a href="#" className="h-6 w-6">
                <img
                  className="h-6 w-6"
                  src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720609534/FINAL_LOGO-CMZ27HCT_rvrnax.png"
                  alt="Cyscom VIT Site"
                />
              </a>
              <a href="#" className="h-6 w-6">
                <img
                  className="h-6 w-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="#" target="_blank" className="h-6 w-6">
                <img
                  className="h-6 w-6"
                  src="https://res.cloudinary.com/dxu5hlgvd/image/upload/v1720083181/instagram_mqplcc.png"
                  alt="Instagram"
                />
              </a>
            </div>
            <div className="text-sm">An event by Cyscom and CodeChef VITC</div>
          </div>
          <div className="w-1/2 flex flex-wrap align-middle justify-center text-center">
            <span className="text-xl md:text-3xl font-extrabold text-code-shadow">
              CODE
            </span>
            <span className="text-xl md:text-3xl font-extrabold text-amp-shadow">
              &nbsp;&amp;&nbsp;
            </span>
            <span className="text-xl md:text-3xl font-extrabold text-conquer-shadow">
              CONQUER!
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
