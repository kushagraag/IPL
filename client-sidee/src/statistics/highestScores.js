import React from 'react';

const HighestScores = ({ stats }) => {
  // console.log(stats)
  return (
    <div className='container' style={{
      maxWidth:'100%',
      borderRadius:'10px',
      backgroundColor:'white',
      boxShadow: '0px 20px 20px -17px rgb(10, 10, 100, 1.5)',
      }}>
        <div style={{fontSize: '22px', marginLeft:'20px', marginBottom:'-2.5%', fontWeight: 100, paddingTop: '20px'}}>
          <p>HIGHEST SCORES</p>
        </div>
      <table style={{
        backgroundColor:'white',
        padding:'20px',
        marginLeft: '-.2%',
        }}>
        <thead>
          <tr >
            <th class="col-8 smaller">Player</th>
            <th className='col-2'></th>
            <th className="smaller alignRight">Run</th>
            <th className="smaller alignRight">S/R</th>
          </tr>
        </thead>
        <tbody>
          <>
            {stats && stats.length > 0 && stats.map((player) => (
            <>
            <tr>
              <td class="col-5 highlighted" >
                {player.playerName}
                </td>
                <td className='col-2'></td>
              <td class='alignRight highlighted' >{player.run}</td>
              <td class='alignRight highlighted' >{player.sr}</td>
            </tr>
            </>
            ))}
          </>
        </tbody>
      
      </table>
    </div>
  );
}

export default HighestScores;
