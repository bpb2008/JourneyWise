import React from 'react'
import classNames from 'classnames'
import './footer-custom.css'

const Footer = () => {
  
  const style = (listStyle) => {
    return classNames (
      {"w-[35px] h-[35px] rounded-full bg-[#F5FF82] flex": listStyle},
    )
  }

  return (
      <footer className="footer-custom">
          <p id="copyright">© CherryOnTech Venus Voyagers | All Rights Reserved.</p>
          <ul>
            <a href="https://www.linkedin.com/company/cherry-on-tech/posts/?feedView=all">
              <li className ={style("listStyle")}><img src="/LinkedIn-Icon-PH.svg" alt="LinkedIn Logo, link to Cherry on Tech's LinkedIn" /></li>
            </a>
            <a href="">
              <li className ={style("listStyle")}><img src="Notion-Icon-PH.svg" alt="Notion Logo, link to Cherry on Tech's Notion" /></li>
            </a>
            <a href="">
              <li className ={style("listStyle")}><img src="Youtube-Icon-PH.svg" alt="Youtube Logo, link to Cherry on Tech's Youtube Channel" /></li>
            </a>
          </ul>
      </footer>
  )
}

export default Footer 