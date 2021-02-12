import React, { useState, useEffect } from "react";
import { fetchTeam } from "../Api/index.js";
import LightSpeed from "react-reveal/LightSpeed";

const Team = () => {
  let [team, setTeam] = useState([]);
  const onload = async () => {
    const { data } = await fetchTeam();
    setTeam(data);
  };
  useEffect(() => {
    onload();
  }, []);

  return (
    <div>
      <LightSpeed>
        <div className="basic-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Team Behind Brainboxbd</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                {/* === */}
                {team.map((s) => (
                  <div className="team-member">
                    <div className="image-wrapper">
                      <img
                        className="img-fluid-pic"
                        src={s.image}
                        key={s._id}
                        alt="alternative"
                      />
                    </div>

                    <p className="p-large">{s.name}</p>
                    <p className="job-title">{s.position}</p>
                  </div>
                ))}

                {/* === */}
              </div>
            </div>
          </div>
        </div>
      </LightSpeed>
    </div>
  );
};

export default Team;
