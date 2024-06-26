import React , {useState}from "react";
import { useLocation } from "react-router-dom";
import pioneer from "/pioneer.svg"
import perfectionist  from "/perfectionist.svg"
import recluse  from "/recluse.svg"
import soloist from "/soloist.svg"
import trailblazer from "/Trailblazer-Archetype-Illustration.svg"
import seer from "/Seer-Archetype-Illustration.svg"


const Content = () => {
    const [active , setAcive]  = useState("Iam"); 
    const location = useLocation();
    const {arcTypeCount:{archeType}} = location.state
    const archsplit = archeType.split(" ")
    const archToLowerCasea = archsplit[1].toLowerCase();
    
    let archetypeImage;
    let oldArchtype
    let textIam;
    let textIwas 
    let image;

    switch (archToLowerCasea ) {
        case "soloist":
          archetypeImage = soloist;
          oldArchtype= "The TrailBlazer"
          textIwas= "As the Soloist, you may feel a strong compulsion to handle tasks independently, avoiding dependency on others and struggling with delegation or collaboration. You prefer to work alone, fearing that relying on others will lead to feelings of burden and isolation, ultimately contributing to burnout."
          textIam= "As a Trailblazer, you harness your independence and initiative to forge new paths and inspire others. While you still value autonomy, you now recognize the power of collaboration and delegation as catalysts for innovation. Instead of fearing reliance on others, you embrace teamwork, leveraging diverse perspectives to achieve shared goals. Your leadership ignites progress and fosters a sense of unity, paving the way for collective success."
          image = trailblazer

          break;
        case "perfectionist":
          archetypeImage = perfectionist;
          oldArchtype= "The Pioneer"
          textIwas="As a Perfectionist, you constantly strive for flawlessness, setting exceptionally high standards for yourself and feeling intense pressure to meet or exceed these standards in every aspect of your work and life. You fear any deviation from perfection and often experience significant stress and guilt if you perceive yourself as falling short of your own unrealistic expectations."
          textIam = "As a Pioneer, you channel your drive for excellence into innovative pursuits, setting ambitious goals and pushing boundaries. You embrace challenges with curiosity and adaptability, no longer constrained by the fear of imperfection but fueled by the excitement of exploration and discovery."
           image = pioneer
          break;
        case "recluse":
          archetypeImage = recluse;
          oldArchtype="The Seer"
          textIwas= "As the Recluse, you experience constant pressure to appear effortlessly competent, fearing any indication of struggle or imperfection. You avoid challenges and unfamiliar tasks to uphold the illusion of innate capability, often isolating yourself from opportunities for growth and development."
          textIam= "As a Seer, you transcend the confines of self-imposed  isolation, embracing vulnerability and authenticity. You see beyond the illusion of effortless competence, recognizing that true growth comes from facing challenges and embracing imperfection. With newfound clarity, you open yourself to diverse experiences and opportunities, guided by intuition and wisdom gained from your journey of self-discovery."
          image = seer
          break
        default:
          archetypeImage = null;
          break;
      }
      const handleClick = (butonType) => {
        setAcive(butonType);
      };


    return (
        <section className = "mt-[17px]">

            <div className = "text-blackCustom text-center font-features font-serifTex font-normal leading-normal">
                <h3 className=" text-[48px] mb-[57px]">Toggle Through To See Your Evolution</h3>
            </div>
            <figure className = "rounded-[29px] bg-white shadow-lg md:max-w-[1142px] md:max-h-[518px] md:rounded-[29px] md:shadow-[9px_9px_12px_0px_rgba(0,0,0,0.15)] md:mx-[149px]">
                <div className = "flex flex-col justify-center items-center md:flex-row md:justify-between">
                <div className="flex justify-center items-center md:flex-1 md:mx-[90px]">
                        <img className="min-w-[233px] min-h-[239px] pt-[9px] pb-[32px] pl-[18px] pr-[43px] md:max-w-[341px] md:max-h-[308px]" src={active === "Iam" ? image : archetypeImage}
              alt={active === "Iam" ? "pioneer" : "archetype"} />
                    </div>
                
                <div className = "text-blackCustom font-features font-serifTex font-normal leading-normal min-w-[295px] min-h-[336px] bg-[#E5F0F7] md:max-w-[574px] md:max-h-[519px] flex:1 rounded-r-[29px] text-wrap">
                    <h3 className = "text-[48px] mt-[84px] mb-[8px] md:min-w-[402px] md:text-[48px] md:mt[126px] md:ml-[59px] md:mr-[112px] md:mb-[27px]" >{active==="Iam"?oldArchtype:archeType}</h3>
                    <p className = "text-[18px] leading-[27px] min-w-[250px] min-h-[217px] mr-[21px] md:ml-[59px] mb-[35px] md:w-[432px]">

                    {(active === "Iam" && textIam )|| (active ==="Iwas" && textIwas) }

                    </p>
                </div>
                </div>
            </figure>
            <div className="w-[204px] h-[45px] flex-shrink-0 rounded-[55px] border border-black mt-5 mx-auto flex items-center justify-center">
                <button className={`w-[112px] h-[37px] flex-shrink-0 text-black flex items-center justify-center font-dmSans text-[14px] tracking-[2px] ${active ==="Iam" &&  "rounded-[55px] border border-black bg-black text-white"}`} onClick = {()=>handleClick("Iam")}>I AM</button>
                <button className={`w-[112px] h-[37px] px-[10px] text-black text-center font-dmSans text-[14px] font-bold leading-normal tracking-[2px] ${active ==="Iwas" &&  "rounded-[55px] border border-black bg-black text-white"}`} onClick = {()=>handleClick("Iwas")}>I WAS</button>
            </div>
        </section>

    )
}

export default Content;