import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={social}>
                <img 
                  src={social.src}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link) => (
            <div className="" key={link}>
              <h4 className="font-montserrat text-white text-2xl leading-normal font-medium mb-6 ">{link.title}</h4>
              <ul>
                {link.links.map((lin) => (
                  <li key={lin.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href={lin.link}>{lin.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1 justify-start items-start gap-2 font-montserrat cursor-pointer">
          <img 
            src={copyrightSign}
            alt="Copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="">Copyright. All rights reserved.</p>
        </div>
        <p className="ont-montserrat cursor-pointer">Terms & condition</p>
      </div>
    </footer>
  )
}

export default Footer