import React from "react";
import Imag1 from "../assets/inner.jpeg";
import Imag2 from "../assets/building.jpeg";
import Imag3 from "../assets/bibi.jpeg";

import { ReactComponent as PeopleIcon } from "../common/Icons/People.svg";
import { ReactComponent as CalenderIcon } from "../common/Icons/Calender.svg";
import { ReactComponent as LandIcon } from "../common/Icons/Land.svg";
import { ReactComponent as AreaIcon } from "../common/Icons/Area.svg";

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
  {id: 1, name: "Jack Smith", review: "Do dodo"},
  {id: 2, name: "Rose Packer",},
  {id: 3, name: "Adams Yakubu",},
]