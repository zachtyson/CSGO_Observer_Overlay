import "./../styles/Teams.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5001");

export function Teams() {
    const [teamCT, setTeamCT] = useState(null);
    const [teamT, setTeamT] = useState(null);

    useEffect(() => {
        socket.on("CTTeam", (CTTeam) => {
            //console.log("Setting CT team");
            setTeamCT(CTTeam);
        });

        socket.on("TTeam", (TTeam) => {
            //console.log("Setting T team");
            setTeamT(TTeam);
        });
    });

    if (teamCT && teamT) {
        return (
            <div>
                <div className="Tplayers">
                    {teamT.map((player, index) => (
                        <div className="TplayerBlock" key={player.observer_slot}>
                            <div>
                                {" "}
                                {player.match_stats.kills} / {player.match_stats.assists} /{" "}
                                {player.match_stats.deaths} ADR: {player.match_stats.adr}
                            </div>

                            <div>
                                {player.observer_slot}. {player.name} {player.state.health}{" "}
                                {player.state.armor}{" "}
                                {player.state.helmet
                                    ? "HELMET"
                                    : player.state.armor > 0
                                        ? "NO HELMET"
                                        : "NO ARMOR"}{" "}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="CTplayers">
                    {teamCT.map((player, index) => (
                        <div className="CTplayerBlock" key={player.observer_slot}>
                            <div>
                                {" "}
                                {player.match_stats.kills} / {player.match_stats.assists} /{" "}
                                {player.match_stats.deaths} ADR: {player.match_stats.adr}
                            </div>

                            <div>
                                {player.observer_slot}. {player.name} {player.state.health}{" "}
                                {player.state.armor} {player.state.helmet ? "HELMET" : "NO HELMET"}{" "}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else return <div></div>;
}

export default Teams;
