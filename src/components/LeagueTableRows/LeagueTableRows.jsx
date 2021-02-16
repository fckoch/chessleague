import React, {Component} from 'react'
import AddGameModal from '../AddGameModal/AddGameModal'

export default class LeagueTableRows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:  false,
            ranking:    props.ranking,
            fixtures:   props.fixtures
        };
      };   
    openModal = (e) =>    {
        this.setState({
            showModal: true
        })
    }
    render() {
        return (
            <React.Fragment>
          
            {this.props.showRaking &&
                this.state.ranking &&
                   this.state.ranking
                   .sort((a,b) => b.aelo - a.aelo)
                   .map((item, index) => { 
                        return(
                            <tr key={index}>
                                <th scope="col">{index + 1}</th>
                                <th scope="col">{item.id}</th>
                                <th scope="col">{item.wins}</th>
                                <th scope="col">{item.draws}</th>
                                <th scope="col">{item.losses}</th>
                                <th scope="col">{item.games_played} / {item.games_required}</th>
                                <th scope="col">{item.aelo}</th>
                            </tr>
                            )
                    })
            }
            {this.props.showFixtures && 
                this.state.fixtures &&
                this.state.fixtures.map((item, index) => {
                    return(
                        <tr className="rows" key={item.id}>
                            <th scope="row" >{index + 1}</th>
                            <td>{item.white}</td>
                            <td>{item.black}</td>
                            <td>{new Date(item.deadline).getDate() + "/" + new Date(item.deadline).toLocaleString('default', { month: 'long' })}</td>
                                {item.outcome ? 
                                    <td>{item.outcome}</td>
                                    :
                                   <td><AddGameModal /></td>
                             
                                }
                        </tr>
                    )
                }) 
            }
      
       
        </React.Fragment>
    )
    }
}
