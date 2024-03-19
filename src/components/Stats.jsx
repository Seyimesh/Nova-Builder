import React from "react";
import { Stats_Data } from "../utils/mock";
import StatsCards from "../common/cards/StatsCard";

const Stats = () => {
  return (
    <section className="bg-secondary">
      <div className="max-w-screen-xl flex justify-around mx-auto flex-wrap">
        {Stats_Data.map((items) => (
          <StatsCards
            key={items.label}
            label={items.label}
            iconURL={items.iconURL}
            count={items.count}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
