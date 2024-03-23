import React from "react";
import Imag1 from "../assets/inner.jpeg";
import Imag2 from "../assets/building.jpeg";
import Imag3 from "../assets/bibi.jpeg";

import { ReactComponent as PeopleIcon } from "../common/Icons/People.svg";
import { ReactComponent as CalenderIcon } from "../common/Icons/Calender.svg";
import { ReactComponent as LandIcon } from "../common/Icons/Land.svg";
import { ReactComponent as AreaIcon } from "../common/Icons/Area.svg";

import Pic1 from "../assets/pic1.jpeg";
import Pic2 from "../assets/pic2.jpeg";
import Pic3 from "../assets/pic3.jpeg";
import Pic4 from "../assets/pic4.jpeg";
import Pic5 from "../assets/pic5.jpeg";


export const Stats_Data = [
  {
    iconURL: <LandIcon className="w-8 h-8" />,
    count: "1m+",
    label: "5qft Area Constructed",
  },
  {
    iconURL: <AreaIcon className="w-8 h-8" />,
    count: "180",
    label: "5qft Area Constructed",
  },
  {
    iconURL: <CalenderIcon className="w-8 h-8" />,
    count: "25",
    label: "Years of Experience",
  },
  {
    iconURL: <PeopleIcon className="w-8 h-8" />,
    count: "172",
    label: "Trained Professionals",
  },
];

export const SERVICES = [
  {
    title: "Pre-Construction",
    imgUrl: Imag1,
    description: [
      <span>
        Before the first beam is raised, meticulous planning sets the stage. At
        Nova Builder, our pre-construction services pave the way for seamless
        execution and exceptional results. From initial concept to comprehensive
        analysis, our expert team navigates every stage with precision and care.
        Trust us to anticipate challenges, streamline processes, and deliver
        value at every turn. <br/>Let's build your vision, together.
      </span>,
    ],
  },
  {
    title: "General Constructing",
    imgUrl: Imag2,
    description:
      "At Nova Builder we specialize in turning houses into homes through our comprehensive general construction services. From the initial groundbreaking to the final touches, our skilled team ensures that every aspect of your project is executed with the utmost care and attention to detail. Trust us to bring your vision to life, creating a space that embodies comfort, style, and lasting quality.",
  },
  {
    title: "Design Building",
    imgUrl: Imag3,
    description:
      "At Nova Builder, our design-building approach transforms concepts into reality seamlessly. With our integrated design and construction services, we streamline the entire process from inception to completion. Our expert team collaborates closely with you to create innovative and functional spaces that exceed expectations. Let us bring your vision to life with efficiency, creativity, and unmatched craftsmanship.",
  },
];

export const TESTIMONIALS = [
  {id: 1, name: "Jack Smith",imgUrl: Pic1, review: "Professionalism and Communication", description: "One of the standout qualities of Nova Builder Construction is their unwavering professionalism and clear communication. From the initial consultation to project completion, they maintained an open line of communication, keeping me informed every step of the way. Any questions or concerns I had were promptly addressed, demonstrating their commitment to client satisfaction."},
  {id: 2, name: "Rose Packer",imgUrl: Pic2, review: "Expertise and Craftsmanship", description: "Nova Builder Construction demonstrated a remarkable level of expertise and craftsmanship throughout the entirety of my project. From laying the foundation to the final touches, their attention to detail was evident in every aspect of the construction process. Whether it was intricate architectural features or ensuring structural integrity, their skilled team showcased their mastery at every turn."},
  {id: 3, name: "Adams Yakubu", imgUrl: Pic3, review: "Exemplary Craftsmanship and Professionalism", description: "As a discerning client in search of a construction company that not only delivers on promises but surpasses expectations, my experience with Nova Builder Construction has been nothing short of exceptional. From the outset, their dedication to excellence was evident, setting them apart as a leader in the industry."},
  {id: 4, name: "Adams Yakubu", imgUrl: Pic4, review: "Transparency and Trustworthiness", description: "Throughout the entire construction process, Nova Builder Construction exemplified transparency and trustworthiness. From providing detailed cost estimates to explaining each phase of the project, they instilled confidence and trust in their abilities. There were no hidden surprises or unexpected costs, further solidifying my trust in their integrity."},
  {id: 5, name: "Adams Yakubu", imgUrl: Pic5, review: "Timeliness and Efficiency", description: "Meeting deadlines and staying within budget are paramount in the construction industry, and Nova Builder Construction excelled in both areas. Despite the complexities of my project, they demonstrated remarkable efficiency without compromising on quality. Their ability to adhere to the timeline while delivering impeccable results speaks volumes about their dedication and expertise."},
]