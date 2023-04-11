import React from 'react';

const BestBowlingSrs = ({stats}) => {
    return (
        <div className='container'
            style={
                {
                    maxWidth: '100%',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    boxShadow: '0px 20px 20px -17px rgb(10, 10, 100, 1.5)'
                }
        }>
            <div style={
                {
                    fontSize: '22px',
                    marginLeft: '20px',
                    marginBottom: '-2.5%',
                    fontWeight: 100,
                    paddingTop: '20px'
                }
            }>
                <p>BEST BOWLING SRS</p>
            </div>
            <table style={
                {
                    backgroundColor: 'white',
                    padding: '20px',
                    marginLeft: '-.2%'
                }
            }>
                <thead>
                    <tr>
                        <th class="col-7 smaller">Player</th>
                        <th className='col-2'></th>
                        <th className="smaller alignRight">M</th>
                        <th className="smaller alignRight">W</th>
                        <th className="smaller alignRight">S/R</th>
                    </tr>
                </thead>
                <tbody>
                    <> {
                        stats.bestBowlingSrs && stats.bestBowlingSrs.length > 0 && stats.bestBowlingSrs.map((player) => (
                            <>
                                <tr>
                                    <td class="col-7 highlighted">
                                        <span className='highlighted'>
                                            {
                                            player.playerName
                                        }</span>
                                        <br/>
                                        <span className='smaller'>
                                            {
                                            player.team
                                        }</span>
                                    </td>
                                    <td className='col-2'></td>
                                    <td class='alignRight highlighted'>
                                        {
                                        player.matches
                                    }</td>
                                    <td class='alignRight highlighted'>
                                        {
                                        player.wicket
                                    }</td>
                                    <td class='alignRight highlighted'>
                                        {
                                        player.sr
                                    }</td>
                                </tr>
                            </>
                        ))
                    } </>
                </tbody>

            </table>
        </div>
    );
}

export default BestBowlingSrs;
